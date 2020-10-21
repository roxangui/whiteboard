enum Tool {
  Select = 'Select',
  Stroke = 'Stroke',
  Shape = 'Shape',
  Text = 'Text',
  Latex = 'Latex',
  Emoji = 'Emoji',
  Image = 'Image',
  Undo = 'Undo',
  Redo = 'Redo',
  Clear = 'Clear',
  Eraser = 'Eraser',
  Zoom = 'Zoom',
  Save = 'Save',
  Update = 'Update',
  LazyUpdate = 'LazyUpdate',
  Remove = 'Remove',
  Highlighter = 'Highlighter',
}

export enum ShapeType {
  Rectangle = 'Rectangle',
  Oval = 'Oval',
  Triangle= 'Triangle'
} 

export const MAX_SCALE = 10;

export const MIN_SCALE = 0.1;

export interface Position {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const strokeSize = [2, 4, 6, 8, 10];

export const strokeColor = ['#4a4a4a', '#f55b6c', '#f7c924', '#63d321', '#50e3c2', '#59b9ff', '#bd10e0', '#ffffff'];

export enum TextSize {
  Small = 12,
  Default = 20,
  Large = 28,
  XL = 36
}

export enum LatexSize {
  Small = 12,
  Default = 20,
  Large = 28,
  XL = 100
}

export enum EmojiOption {
  Alien="👽",
  AlienMonster="👾",
  AngryFace="😠",
  AngryFacewithHorns="👿",
  AnguishedFace="😧",
  AnxiousFacewithSweat="😰",
  Artist="🧑‍🎨",
  AstonishedFace="😲",
  Astronaut="🧑‍🚀",
  Baby="👶",
  BabyAngel="👼",
  BackhandIndexPointingDown="👇",
  BackhandIndexPointingLeft="👈",
  BackhandIndexPointingRight="👉",
  BackhandIndexPointingUp="👆",
  Backpack="🎒",
  BalletShoes="🩰",
  BeamingFacewithSmilingEyes="😁",
  Bikini="👙",
  BilledCap="🧢",
  Bone="🦴",
  Boy="👦",
  Brain="🧠",
  BreastFeeding="🤱",
  Briefcase="💼",
  Briefs="🩲",
  BustinSilhouette="👤",
  BustsinSilhouette="👥",
  CallMeHand="🤙",
  CatwithTearsofJoy="😹",
  CatwithWrySmile="😼",
  Child="🧒",
  ClappingHands="👏",
  ClosedUmbrella="🌂",
  ClownFace="🤡",
  ClutchBag="👝",
  Coat="🧥",
  ColdFace="🥶",
  ConfoundedFace="😖",
  ConfusedFace="😕",
  ConstructionWorker="👷",
  Cook="🧑‍🍳",
  CouplewithHeart="💑",
  CouplewithHeartManMan="👨‍❤️‍👨",
  CouplewithHeartWomanMan="👩‍❤️‍👨",
  CouplewithHeartWomanWoman="👩‍❤️‍👩",
  CowboyHatFace="🤠",
  CrossedFingers="🤞",
  Crown="👑",
  CryingCat="😿",
  CryingFace="😢",
  DeafMan="🧏‍♂️",
  DeafPerson="🧏",
  DeafWoman="🧏‍♀️",
  Detective="🕵",
  DisappointedFace="😞",
  DizzyFace="😵",
  DowncastFacewithSweat="😓",
  Dress="👗",
  DroolingFace="🤤",
  DropofBlood="🩸",
  Ear="👂",
  EarwithHearingAid="🦻",
  Elf="🧝",
  ExplodingHead="🤯",
  ExpressionlessFace="😑",
  Eye="👁",
  Eyes="👀",
  FaceBlowingaKiss="😘",
  FaceSavoringFood="😋",
  FaceScreaminginFear="😱",
  FaceVomiting="🤮",
  FacewithHandOverMouth="🤭",
  FacewithHeadBandage="🤕",
  FacewithMedicalMask="😷",
  FacewithMonocle="🧐",
  FacewithOpenMouth="😮",
  FaceWithoutMouth="😶",
  FacewithRaisedEyebrow="🤨",
  FacewithRollingEyes="🙄",
  FacewithSteamFromNose="😤",
  FacewithSymbolsonMouth="🤬",
  FacewithTearsofJoy="😂",
  FacewithThermometer="🤒",
  FacewithTongue="😛",
  FactoryWorker="🧑‍🏭",
  Fairy="🧚",
  Family="👪",
  FamilyManBoy="👨‍👦",
  FamilyManBoyBoy="👨‍👦‍👦",
  FamilyManGirl="👨‍👧",
  FamilyManGirlBoy="👨‍👧‍👦",
  FamilyManGirlGirl="👨‍👧‍👧",
  FamilyManManBoy="👨‍👨‍👦",
  FamilyManManBoyBoy="👨‍👨‍👦‍👦",
  FamilyManManGirl="👨‍👨‍👧",
  FamilyManManGirlBoy="👨‍👨‍👧‍👦",
  FamilyManManGirlGirl="👨‍👨‍👧‍👧",
  FamilyManWomanBoy="👨‍👩‍👦",
  FamilyManWomanBoyBoy="👨‍👩‍👦‍👦",
  FamilyManWomanGirl="👨‍👩‍👧",
  FamilyManWomanGirlBoy="👨‍👩‍👧‍👦",
  FamilyManWomanGirlGirl="👨‍👩‍👧‍👧",
  FamilyWomanBoy="👩‍👦",
  FamilyWomanBoyBoy="👩‍👦‍👦",
  FamilyWomanGirl="👩‍👧",
  FamilyWomanGirlBoy="👩‍👧‍👦",
  FamilyWomanGirlGirl="👩‍👧‍👧",
  FamilyWomanWomanBoy="👩‍👩‍👦",
  FamilyWomanWomanBoyBoy="👩‍👩‍👦‍👦",
  FamilyWomanWomanGirl="👩‍👩‍👧",
  FamilyWomanWomanGirlBoy="👩‍👩‍👧‍👦",
  FamilyWomanWomanGirlGirl="👩‍👩‍👧‍👧",
  Farmer="🧑‍🌾",
  FearfulFace="😨",
  Firefighter="🧑‍🚒",
  FlatShoe="🥿",
  FlexedBiceps="💪",
  FlushedFace="😳",
  FoldedHands="🙏",
  Foot="🦶",
  Footprints="👣",
  FrowningFacewithOpenMouth="😦",
  Genie="🧞",
  Ghost="👻",
  Girl="👧",
  Glasses="👓",
  Gloves="🧤",
  Goblin="👺",
  Goggles="🥽",
  GraduationCap="🎓",
  GrimacingFace="😬",
  GrinningCat="😺",
  GrinningCatwithSmilingEyes="😸",
  GrinningFace="😀",
  GrinningFacewithBigEyes="😃",
  GrinningFacewithSmilingEyes="😄",
  GrinningFacewithSweat="😅",
  GrinningSquintingFace="😆",
  Guard="💂",
  Handbag="👜",
  Handshake="🤝",
  HandwithFingersSplayed="🖐",
  HealthWorker="🧑‍⚕️",
  HighHeeledShoe="👠",
  HikingBoot="🥾",
  HotFace="🥵",
  HuggingFace="🤗",
  HushedFace="😯",
  IndexPointingUp="☝",
  JackOLantern="🎃",
  Jeans="👖",
  Judge="🧑‍⚖️",
  Kimono="👘",
  Kiss="💏",
  KissingCat="😽",
  KissingFace="😗",
  KissingFacewithClosedEyes="😚",
  KissingFacewithSmilingEyes="😙",
  KissManMan="👨‍❤️‍💋‍👨",
  KissMark="💋",
  KissWomanMan="👩‍❤️‍💋‍👨",
  KissWomanWoman="👩‍❤️‍💋‍👩",
  LabCoat="🥼",
  LeftFacingFist="🤛",
  Leg="🦵",
  Lipstick="💄",
  LoudlyCryingFace="😭",
  LoveYouGesture="🤟",
  Luggage="🧳",
  LyingFace="🤥",
  Mage="🧙",
  Man="👨",
  ManArtist="👨‍🎨",
  ManAstronaut="👨‍🚀",
  ManBald="👨‍🦲",
  ManBlondHair="👱‍♂️",
  ManBowing="🙇‍♂️",
  ManConstructionWorkder="👷‍♂️",
  ManCook="👨‍🍳",
  ManCurlyHair="👨‍🦱",
  ManDancing="🕺",
  ManDetective="🕵️‍♂️",
  ManElf="🧝‍♂️",
  ManFacePalm="🤦‍♂️",
  ManFactoryWorker="👨‍🏭",
  ManFairy="🧚‍♂️",
  ManFarmer="👨‍🌾",
  ManFirefighter="👨‍🚒",
  ManFrowning="🙍‍♂️",
  ManGenie="🧞‍♂️",
  ManGesturingNo="🙅‍♂️",
  ManGesturingOk="🙆‍♂️",
  ManGettingHairCut="💇‍♂️",
  ManGettingMassage="💆‍♂️",
  ManGuard="💂‍♂️",
  ManHealthWorker="👨‍⚕️",
  ManinManualWheelchair="👨‍🦽",
  ManinMotorizedWheelchair="👨‍🦼",
  ManinStreamyRoom="🧖‍♂️",
  ManJudge="👨‍⚖️",
  ManKneeling="🧎‍♂️",
  ManMage="🧙‍♂️",
  ManMechanic="👨‍🔧",
  ManOfficeWorker="👨‍💼",
  ManPilot="👨‍✈️",
  ManPoliceOfficer="👮‍♂️",
  ManPouting="🙎‍♂️",
  ManRaisingHand="🙋‍♂️",
  ManRedHair="👨‍🦰",
  ManRunning="🏃‍♂️",
  ManScientist="👨‍🔬",
  ManShrugging="🤷‍♂️",
  ManSinger="👨‍🎤",
  MansShoe="👞",
  ManStanding="🧍‍♂️",
  ManStudent="👨‍🎓",
  ManSuperHero="🦸‍♂️",
  ManSuperVillain="🦹‍♂️",
  ManTeacher="👨‍🏫",
  ManTechnologist="👨‍💻",
  ManTippingHand="💁‍♂️",
  ManVampire="🧛‍♂️",
  ManWalking="🚶‍♂️",
  ManWearingTurban="👳‍♂️",
  ManWhiteHair="👨‍🦳",
  ManwithWhiteCane="👨‍🦯",
  ManZombie="🧟‍♂️",
  Mechanic="🧑‍🔧",
  MechanicalArm="🦾",
  MechanicalLeg="🦿",
  MenHoldingHands="👬",
  MenWithBunnyEars="👯‍♂️",
  Mermaid="🧜‍♀️",
  Merman="🧜‍♂️",
  Merperson="🧜",
  MiddleFinger="🖕",
  MoneyMouthFace="🤑",
  Mouth="👄",
  MrsClaus="🤶",
  NailPolish="💅",
  NauseatedFace="🤢",
  Necktie="👔",
  NerdFace="🤓",
  NeutralFace="😐",
  Nose="👃",
  OfficeWorker="🧑‍💼",
  Ogre="👹",
  OKHand="👌",
  OlderPerson="🧓",
  OldMan="👴",
  OldWoman="👵",
  OncomingFist="👊",
  OnePieceSwimsuit="🩱",
  OpenHands="👐",
  PalmsUpTogether="🤲",
  PartyingFace="🥳",
  PensiveFace="😔",
  PeopleHoldingHands="🧑‍🤝‍🧑",
  PeoplewithBunnyEars="👯",
  PerseveringFace="😣",
  Person="🧑",
  PersonBald="🧑‍🦲",
  PersonBeard="🧔",
  PersonBlondHair="👱",
  PersonBowing="🙇",
  PersonCurlyHair="🧑‍🦱",
  PersonFacepalming="🤦",
  PersonFeedingBaby="🧑‍🍼",
  PersonFrowning="🙍",
  PersonGesturingNo="🙅",
  PersonGesturingOK="🙆",
  PersonGettingHaircut="💇",
  PersonGettingMassage="💆",
  PersoninLotusPosition="🧘",
  PersoninManualWheelchair="🧑‍🦽",
  PersoninMotorizedWheelchair="🧑‍🦼",
  PersoninSteamyRoom="🧖",
  PersoninSuitLevitating="🕴",
  PersoninTuxedo="🤵",
  PersonKneeling="🧎",
  PersonPouting="🙎",
  PersonRaisingHand="🙋",
  PersonRedHair="🧑‍🦰",
  PersonRunning="🏃",
  PersonShrugging="🤷",
  PersonStanding="🧍",
  PersonTippingHand="💁",
  PersonWalking="🚶",
  PersonWearingTurban="👳",
  PersonWhiteHair="🧑‍🦳",
  PersonWithSkullcap="👲",
  PersonWithVeil="👰",
  PersonwithWhiteCane="🧑‍🦯",
  PileofPoo="💩",
  Pilot="🧑‍✈️",
  PinchingHand="🤏",
  PleadingFace="🥺",
  PoliceOfficer="👮",
  PoutingCat="😾",
  PoutingFace="😡",
  PregnantWoman="🤰",
  Prince="🤴",
  Princess="👸",
  Purse="👛",
  RaisedBackofHand="🤚",
  RaisedFist="✊",
  RaisedHand="✋",
  RaisingHands="🙌",
  RelievedFace="😌",
  RescueWorkersHelmet="⛑",
  RightFacingFist="🤜",
  Ring="💍",
  Robot="🤖",
  RollingontheFloorLaughing="🤣",
  RunningShoe="👟",
  SadbutRelievedFace="😥",
  SafetyVest="🦺",
  SantaClaus="🎅",
  Sari="🥻",
  Scarf="🧣",
  Scientist="🧑‍🔬",
  Selfie="🤳",
  Shorts="🩳",
  ShushingFace="🤫",
  SignoftheHorns="🤘",
  Singer="🧑‍🎤",
  Skull="💀",
  SkullandCrossbones="☠",
  SleepingFace="😴",
  SleepyFace="😪",
  SlightlyFrowningFace="🙁",
  SlightlySmilingFace="🙂",
  SmilingCatwithHeartEyes="😻",
  SmilingFacewithHalo="😇",
  SmilingFacewithHeartEyes="😍",
  SmilingFacewithHearts="🥰",
  SmilingFacewithHorns="😈",
  SmilingFacewithSmilingEyes="😊",
  SmilingFacewithSunglasses="😎",
  SmirkingFace="😏",
  SneezingFace="🤧",
  Socks="🧦",
  SpeakingHead="🗣",
  SquintingFacewithTongue="😝",
  StarStruck="🤩",
  Student="🧑‍🎓",
  Sunglasses="🕶",
  Superhero="🦸",
  Supervillain="🦹",
  Teacher="🧑‍🏫",
  Technologist="🧑‍💻",
  ThinkingFace="🤔",
  Thread="🧵",
  ThumbsDown="👎",
  ThumbsUp="👍",
  TiredFace="😫",
  Tongue="👅",
  Tooth="🦷",
  TopHat="🎩",
  TShirt="👕",
  Umbrella="☂",
  UnamusedFace="😒",
  UpsideDownFace="🙃",
  Vampire="🧛",
  VictoryHand="✌",
  VulcanSalute="🖖",
  WavingHand="👋",
  WearyCat="🙀",
  WearyFace="😩",
  WinkingFace="😉",
  WinkingFacewithTongue="😜",
  Woman="👩",
  WomanandManHoldingHands="👫",
  WomanArtist="👩‍🎨",
  WomanAstronaut="👩‍🚀",
  WomanBald="👩‍🦲",
  WomanBlondHair="👱‍♀️",
  WomanBowing="🙇‍♀️",
  WomanConstructionWorker="👷‍♀️",
  WomanCook="👩‍🍳",
  WomanCurlyHair="👩‍🦱",
  WomanDancing="💃",
  WomanDetective="🕵️‍♀️",
  WomanElf="🧝‍♀️",
  WomanFacePalming="🤦‍♀️",
  WomanFactoryWorker="👩‍🏭",
  WomanFairy="🧚‍♀️",
  WomanFarmer="👩‍🌾",
  WomanFirefighter="👩‍🚒",
  WomanFrowning="🙍‍♀️",
  WomanGenie="🧞‍♀️",
  WomanGesturingNo="🙅‍♀️",
  WomanGesturingOk="🙆‍♀️",
  WmanGettingHairCut="💇‍♀️",
  WmanGettingMassage="💆‍♀️",
  WomanGuard="💂‍♀️",
  WomanHealthWorker="👩‍⚕️",
  WomaninManualWheelchair="👩‍🦽",
  WomaninMotorizedWheelchair="👩‍🦼",
  WomaninSteamyRoom="🧖‍♀️",
  WomanJudge="👩‍⚖️",
  WomanKneeling="🧎‍♀️",
  WomanMage="🧙‍♀️",
  WomanMechanic="👩‍🔧",
  WomanOfficeWorker="👩‍💼",
  WomanPilot="👩‍✈️",
  WomanPolieOffice="👮‍♀️",
  WomanPouting="🙎‍♀️",
  WomanRaisingHand="🙋‍♀️",
  WomanRedHair="👩‍🦰",
  WomanRunning="🏃‍♀️",
  WomansBoot="👢",
  WomanScientist="👩‍🔬",
  WomansClothes="👚",
  WomansHat="👒",
  WomanShrugging="🤷‍♀️",
  WomanSinger="👩‍🎤",
  WomansSandal="👡",
  WomanStanding="🧍‍♀️",
  WomanStudent="👩‍🎓",
  WomanSuperHero="🦸‍♀️",
  WomanSuperVillain="🦹‍♀️",
  WomanTeacher="👩‍🏫",
  WomanTechnologist="👩‍💻",
  WomanTippingHand="💁‍♀️",
  WomanVampire="🧛‍♀️",
  WomanWalking="🚶‍♀️",
  WomanWearingTurban="👳‍♀️",
  WomanWhiteHair="👩‍🦳",
  WomanwithHeadscarf="🧕",
  WomanwithWhiteCane="👩‍🦯",
  WomanZombie="🧟‍♀️",
  WomenHoldingHands="👭",
  WomanWithBunnyEar="👯‍♀️",
  WoozyFace="🥴",
  WorriedFace="😟",
  WritingHand="✍",
  Yarn="🧶",
  YawningFace="🥱",
  ZanyFace="🤪",
  ZipperMouthFace="🤐",
  Zombie="🧟"
}

export enum EmojiSize {
  Small = 12,
  Default = 20,
  Large = 28,
  XL = 50,
  XXL = 100
}

export const defaultToolOption = {
  highlighterColor: strokeColor[2],
  highlighterSize: strokeSize[4],
  strokeSize: strokeSize[1],
  strokeColor: strokeColor[0],
  shapeType: ShapeType.Rectangle,
  shapeBorderColor: strokeColor[0],
  shapeBorderSize: 4,
  textColor: strokeColor[0],
  textSize: TextSize.Default,
  latexSize: LatexSize.Default,
  emojiSize: EmojiSize.Default,

  defaultLatex: {
    id: 'umi.block.sketch.latex.placeholder'
  },

  defaultEmoji: {
    id: 'umi.block.sketch.emoji.placeholder'
  },

  defaultText: {
    id: 'umi.block.sketch.text.placeholder'
  },
} 

export type ToolOption = {
  highlighterColor: string,
  highlighterSize: number,
  strokeSize: number,
  strokeColor: string,
  shapeType: ShapeType,
  shapeBorderColor: string,
  shapeBorderSize: number,
  textColor: string,
  textSize: TextSize,
  latexSize: LatexSize,
  emojiSize: EmojiSize,
  emojiOption: EmojiOption,

  defaultText: string | {
    id: string,
  },
};


export default Tool;