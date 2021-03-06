import React, { useState } from 'react';
import Tool, { ToolOption, Position, TextSize, strokeColor } from './enums/Tool';
import { IntlShape, } from 'react-intl';
import { RefObject, MouseEvent as ReactMouseEvent } from 'react';
import { mapClientToCanvas, isMobileDevice } from './utils';
import { Icon, Slider } from 'antd';
import './TextTool.less';

let currentText = '';
let currentColor = '';
let currentSize = TextSize.Default;
const textSize = [TextSize.Small, TextSize.Default, TextSize.Large, TextSize.XL];

export interface Text {
  size: TextSize,
  color: string,
  text: string,
}

export const onTextMouseDown = (e: {
  clientX: number,
  clientY: number,
}, toolOption: ToolOption, scale: number, refInput: RefObject<HTMLDivElement>, refCanvas: RefObject<HTMLCanvasElement>, intl: IntlShape) => {
  if (!currentText && refInput.current && refCanvas.current) {
    const textarea = refInput.current;
    const canvas = refCanvas.current;

    const { top, left } = canvas.getBoundingClientRect();

    let x = e.clientX - left;
    let y = e.clientY - top;

    textarea.style.display = 'block';
    textarea.style.left = x + canvas.offsetLeft + 'px';
    textarea.style.top = y + canvas.offsetTop + 'px';
    textarea.style.fontSize = (toolOption.textSize as number) * scale + 'px';
    textarea.style.lineHeight = (toolOption.textSize as number) * scale + 'px';
    textarea.style.height = (toolOption.textSize as number) * scale + 'px';
    textarea.style.color = toolOption.textColor;
    textarea.innerText = typeof toolOption.defaultText === 'string' ? toolOption.defaultText : intl.formatMessage(toolOption.defaultText);

    if (isMobileDevice) {
      textarea.focus();
    }

    setTimeout(() => {
      if (getSelection && Range) {
        const selection = getSelection();

        if (selection) {
          selection.removeAllRanges();
          var range = new Range();
          range.selectNodeContents(textarea);
          selection.addRange(range);
        }
      }
    }, 200);

    currentText = typeof toolOption.defaultText === 'string' ? toolOption.defaultText : intl.formatMessage(toolOption.defaultText);
    currentColor = toolOption.textColor;
    currentSize = toolOption.textSize;
  }
}

export const onTextComplete = (refInput: RefObject<HTMLDivElement>, refCanvas: RefObject<HTMLCanvasElement>, viewMatrix: number[], scale: number, handleCompleteOperation: (tool?: Tool, data?: Text, pos?: Position) => void, setCurrentTool: (tool: Tool) => void) => {
  if (currentText && refInput.current && refCanvas.current) {
    const textarea = refInput.current;
    const text = textarea.innerText;
    let { top, left, width, height } = textarea.getBoundingClientRect();
    width = 1 / scale * width;
    const lineHeight = parseInt(textarea.style.lineHeight.replace('px', ''));
    height = 1 / scale * lineHeight * text.split('\n').length;

    const currentPos = mapClientToCanvas({
      clientX: left,
      clientY: top,
    } as ReactMouseEvent<HTMLCanvasElement>, refCanvas.current, viewMatrix);

    textarea.style.display = 'none';

    const pos: Position = {
      x: currentPos[0],
      y: currentPos[1],
      w: width,
      h: height,
    };

    handleCompleteOperation(Tool.Text, { text, color: currentColor, size: currentSize }, pos);
    setCurrentTool(Tool.Select);
    currentText = '';
  }
}

export const font = `"PingFang SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif, "localant"`;

export const drawText = (item: Text, context: CanvasRenderingContext2D, pos: Position) => {
  context.globalCompositeOperation = 'source-over';
  context.font = `${item.size}px ${font}`;
  context.fillStyle = item.color || '#4a4a4a';
  context.textBaseline = 'middle';

  const lines = item.text.split('\n');
  for (var i = 0; i < lines.length; i++) {
    context.fillText(lines[i], pos.x, pos.y + item.size / 2 + (i * item.size)); // add half line height cause to textBaseline middle
  }
}

export const useTextDropdown = (currentToolOption: ToolOption, setCurrentToolOption: (option: ToolOption) => void, setCurrentTool: (tool: Tool) => void, intl: IntlShape, prefixCls: string) => {
  prefixCls += '-textTool';

  const handleSizes = (value) => {
    setCurrentToolOption({ ...currentToolOption, textSize: value });
    setCurrentTool && setCurrentTool(Tool.Formula);
  }
  return (
    <div className={`${prefixCls}-strokeMenu`}>
      <div className={`${prefixCls}-colorAndSize`} style={{display:'flex',flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'column', height: 50, justifyContent: 'space-between'}} className={`${prefixCls}-textSizeSelector`}>
          <label>Select Style:</label>
          <Slider 
            key={'sliderMenu'}
            min={12}
            max={300}
            style={{width: 200}}
            value={ currentToolOption.textSize === currentSize? currentSize : currentToolOption.textSize}
            onChange = {handleSizes}
          />
        </div>
        <div className={`${prefixCls}-palette`}>
          {strokeColor.map(color => {
            return <div className={`${prefixCls}-color`} key={color}
              onClick={(evt) => {
                evt.stopPropagation();
                setCurrentToolOption({ ...currentToolOption, textColor: color });
                setCurrentTool && setCurrentTool(Tool.Stroke);
              }}
              onTouchStart={(evt) => {
                evt.stopPropagation();
                setCurrentToolOption({ ...currentToolOption, textColor: color });
                setCurrentTool && setCurrentTool(Tool.Stroke);
              }}
            >
              <div className={`${prefixCls}-fill`} style={{ background: color }}></div>
              {currentToolOption.textColor === color ? <Icon type="check" style={color === '#ffffff' ? { color: '#979797' } : {}} /> : null}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

// export const useTextDropdown = (currentToolOption: ToolOption, setCurrentToolOption: (option: ToolOption) => void, setCurrentTool: (tool: Tool) => void, intl: IntlShape, prefixCls: string) => {
//   prefixCls += '-textTool';

//   return (
//     <div className={`${prefixCls}-strokeMenu`}>
//       <div className={`${prefixCls}-colorAndSize`}>
//         <div style={{opacity: 1, display: 'flex', flexDirection: 'column'}} className={`${prefixCls}-textSizeSelector`}
//         >
//           {textSize.map(size => {
//             return (
//               <div
//                 key={size}
//                 onTouchStart={(evt) => {
//                   evt.stopPropagation();
//                   setCurrentToolOption({ ...currentToolOption, textSize: size });
//                   setCurrentTool && setCurrentTool(Tool.Stroke);
//                 }}
//                 onClick={(evt) => {
//                   evt.stopPropagation();
//                   if( evt.target.className === 'active' ) {
//                     const _allSizes = evt.target.parentNode.childNodes;
//                     evt.target.parentNode.classList.add('show-sizes');
//                     evt.target.parentNode.parentNode.classList.add('show-sizes');

//                     for( const _size of _allSizes) {
//                       _size.classList.add('show-size');
//                     }
//                   }
//                   else {
//                     setCurrentToolOption({ ...currentToolOption, textSize: size });
//                     setCurrentTool && setCurrentTool(Tool.Stroke);
//                     const _allSizes = evt.target.parentNode.childNodes;
//                     evt.target.parentNode.classList.remove('show-sizes');
//                     evt.target.parentNode.parentNode.classList.remove('show-sizes');
//                     for( const _size of _allSizes) {
//                       _size.classList.remove('show-size')
//                     }
//                   }
//                 }}
//                 style={{ color: size === currentToolOption.textSize ? '#666' : '#ccc' }}
//                 className={ size === currentToolOption.textSize ? 'active': 'inactive'}
//               >
//                 {size === TextSize.Small ? intl.formatMessage({ id: 'umi.block.sketch.text.size.small' }) 
//                 : size === TextSize.Default ? intl.formatMessage({ id: 'umi.block.sketch.text.size.default' }) 
//                 : size === TextSize.Large ? intl.formatMessage({ id: 'umi.block.sketch.text.size.large' }) 
//                 : intl.formatMessage({ id: 'umi.block.sketch.text.size.xl' })
//                 }
//               </div>
//             )
//           })}
//         </div>
//         <div className={`${prefixCls}-split`}></div>
//         <div className={`${prefixCls}-palette`}>
//           {strokeColor.map(color => {
//             return <div className={`${prefixCls}-color`} key={color}
//               onClick={(evt) => {
//                 evt.stopPropagation();
//                 setCurrentToolOption({ ...currentToolOption, textColor: color });
//                 setCurrentTool && setCurrentTool(Tool.Stroke);
//               }}
//               onTouchStart={(evt) => {
//                 evt.stopPropagation();
//                 setCurrentToolOption({ ...currentToolOption, textColor: color });
//                 setCurrentTool && setCurrentTool(Tool.Stroke);
//               }}
//             >
//               <div className={`${prefixCls}-fill`} style={{ background: color }}></div>
//               {currentToolOption.textColor === color ? <Icon type="check" style={color === '#ffffff' ? { color: '#979797' } : {}} /> : null}
//             </div>
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }