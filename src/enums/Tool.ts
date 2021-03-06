enum Tool {
  Select = 'Select',
  Stroke = 'Stroke',
  Shape = 'Shape',
  Eraser = 'Eraser',
  Text = 'Text',
  Emoji = 'Emoji',
  Formula = 'Formula',
  Latex = 'Latex',
  Katex = 'Katex',
  Image = 'Image',
  Grid = 'Grid',
  Undo = 'Undo',
  Redo = 'Redo',
  Zoom = 'Zoom',
  Clear = 'Clear',
  Save = 'Save',
  Update = 'Update',
  LazyUpdate = 'LazyUpdate',
  Remove = 'Remove',
  Highlighter = 'Highlighter',
  Link = 'Link',
  File = 'File',
  Pdf = 'PDF',
  Video = 'Video',
}

export enum ShapeType {
  Rectangle = 'Rectangle',
  Oval = 'Oval',
  IsoTriangle= 'IsoTriangle',
  RightTriangle= 'RightTriangle',
  ArrowLeft= 'ArrowLeft',
  ArrowRight = 'ArrowRight'

} 

export const MAX_SCALE = 10;

export const MIN_SCALE = 0.1;

export interface Position {
  x: number;
  y: number;
  w: number;
  h: number;
  d: number;
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
  XL = 50,
  XXL = 100
}

export enum LatexOption {
  SquareRoot = 'https://live.braincert.com/html5/build/images/www/assets/latex/math/sqrt.png',
  WideTilde = 'https://live.braincert.com/html5/build/images/www/assets/latex/math/widetilde.png',
  Summation = 'https://live.braincert.com/html5/build/images/www/assets/latex/math/sum.png',
  Product = 'https://live.braincert.com/html5/build/images/www/assets/latex/math/prod.png',
  BigSquareCup = 'https://live.braincert.com/html5/build/images/www/assets/latex/math/bigsqcup.png',
  SquareRootN = 'https://live.braincert.com/html5/build/images/www/assets/latex/math/sqrtn.png'
}

export enum EmojiOption {
  BackhandIndexPointingDown="👇",
  BackhandIndexPointingLeft="👈",
  BackhandIndexPointingRight="👉",
  BackhandIndexPointingUp="👆",
  BeamingFacewithSmilingEyes="😁",
  Boy="👦",
  Brain="🧠",
  BriefCase="💼",
  ClapphingHands="👏",
  ConfoundedFace="😖",
  ConfusedFace="😕",
  CrossedFingers="🤞",
  CryingFace="😢",
  Ear="👂",
  Eyes="👀",
  FlexedBiceps="💪",
  FoldedHands="🙏",
  Girl="👧",
  Glasses="👓",
  GraduationCap="🎓",
  GrimacingFace="😬",GrinningFacewithBigEyes="😃",
  GrinningFacewithSmilingEyes="😄",
  GrinningFacewithSweat="😅",
  GrinningSquintingFace="😆",
  Handshake="🤝",
  HandwithFingersSplayed="🖐",
  HuggingFace="🤗",
  IndexPointingUp="☝",
  LeftFacingFist="🤛",
  ManRaisingHand="🙋‍♂️",
  ManTeacher="👨‍🏫",
  OKHand="👌",
  RaisedFist="✊",
  RaisedHand="✋",
  RaisingHands="🙌",
  RightFacingFist="🤜",
  ThinkingFace="🤔",
  ThumbsDown="👎",
  ThumbsUp="👍",
  VictoryHand="✌",
  WavingHand="👋",
  Woman="👩",
  WomanTeacher="👩‍🏫",
  WritingHand="✍"
}

export enum FormulaOption {
  FOR_ALL="∀",
  COMPLEMENT="∁",
  PARTIAL_DIFFERENTIAL="∂",
  THERE_EXISTS="∃",
  THERE_DOES_NOT_EXIST="∄",
  EMPTY_SET="∅",
  INCREMENT="∆",
  NABLA="∇",
  ELEMENT_OF="∈",
  NOT_AN_ELEMENT_OF="∉",
  SMALL_ELEMENT_OF="∊",
  CONTAINS_AS_MEMBER="∋",
  DOES_NOT_CONTAIN_AS_MEMBER="∌",
  SMALL_CONTAINS_AS_MEMBER="∍",
  END_OF_PROOF="∎",
  N_ARY_PRODUCT="∏",
  N_ARY_COPRODUCT="∐",
  N_ARY_SUMMATION="∑",
  MINUS_SIGN="−",
  MINUS_OR_PLUS_SIGN="∓",
  DOT_PLUS="∔",
  DIVISION_SLASH="∕",
  SET_MINUS="∖",
  ASTERISK_OPERATOR="∗",
  RING_OPERATOR="∘",
  BULLET_OPERATOR="∙",
  SQUARE_ROOT="√",
  CUBE_ROOT="∛",
  FOURTH_ROOT="∜",
  PROPORTIONAL_TO="∝",
  INFINITY="∞",
  RIGHT_ANGLE="∟",
  ANGLE="∠",
  MEASURED_ANGLE="∡",
  SPHERICAL_ANGLE="∢",
  DIVIDES="∣",
  DOES_NOT_DIVIDE="∤",
  PARALLEL_TO="∥",
  NOT_PARALLEL_TO="∦",
  LOGICAL_AND="∧",
  LOGICAL_OR="∨",
  INTERSECTION="∩",
  UNION="∪",
  INTEGRAL="∫",
  DOUBLE_INTEGRAL="∬",
  TRIPLE_INTEGRAL="∭",
  CONTOUR_INTEGRAL="∮",
  SURFACE_INTEGRAL="∯",
  VOLUME_INTEGRAL="∰",
  CLOCKWISE_INTEGRAL="∱",
  CLOCKWISE_CONTOUR_INTEGRAL="∲",
  ANTICLOCKWISE_CONTOUR_INTEGRAL="∳",
  THEREFORE="∴",
  BECAUSE="∵",
  RATIO="∶",
  PROPORTION="∷",
  DOT_MINUS="∸",
  EXCESS="∹",
  GEOMETRIC_PROPORTION="∺",
  HOMOTHETIC="∻",
  TILDE_OPERATOR="∼",
  REVERSED_TILDE="∽",
  INVERTED_LAZY_S="∾",
  SINE_WAVE="∿",
  WREATH_PRODUCT="≀",
  NOT_TILDE="≁",
  MINUS_TILDE="≂",
  ASYMPTOTICALLY_EQUAL_TO="≃",
  NOT_ASYMPTOTICALLY_EQUAL_TO="≄",
  APPROXIMATELY_EQUAL_TO="≅",
  APPROXIMATELY_BUT_NOT_ACTUALLY_EQUAL_TO="≆",
  NEITHER_APPROXIMATELY_NOR_ACTUALLY_EQUAL_TO="≇",
  ALMOST_EQUAL_TO="≈",
  NOT_ALMOST_EQUAL_TO="≉",
  ALMOST_EQUAL_OR_EQUAL_TO="≊",
  TRIPLE_TILDE="≋",
  ALL_EQUAL_TO="≌",
  EQUIVALENT_TO="≍",
  GEOMETRICALLY_EQUIVALENT_TO="≎",
  DIFFERENCE_BETWEEN="≏",
  APPROACHES_THE_LIMIT="≐",
  GEOMETRICALLY_EQUAL_TO="≑",
  APPROXIMATELY_EQUAL_TO_OR_THE_IMAGE_OF="≒",
  IMAGE_OF_OR_APPROXIMATELY_EQUAL_TO="≓",
  COLON_EQUALS="≔",
  EQUALS_COLON="≕",
  RING_IN_EQUAL_TO="≖",
  RING_EQUAL_TO="≗",
  CORRESPONDS_TO="≘",
  ESTIMATES="≙",
  EQUIANGULAR_TO="≚",
  STAR_EQUALS="≛",
  DELTA_EQUAL_TO="≜",
  EQUAL_TO_BY_DEFINITION="≝",
  MEASURED_BY="≞",
  QUESTIONED_EQUAL_TO="≟",
  NOT_EQUAL_TO="≠",
  IDENTICAL_TO="≡",
  NOT_IDENTICAL_TO="≢",
  STRICTLY_EQUIVALENT_TO="≣",
  LESS_THAN_OR_EQUAL_TO="≤",
  GREATER_THAN_OR_EQUAL_TO="≥",
  LESS_THAN_OVER_EQUAL_TO="≦",
  GREATER_THAN_OVER_EQUAL_TO="≧",
  LESS_THAN_BUT_NOT_EQUAL_TO="≨",
  GREATER_THAN_BUT_NOT_EQUAL_TO="≩",
  MUCH_LESS_THAN="≪",
  MUCH_GREATER_THAN="≫",
  BETWEEN="≬",
  NOT_EQUIVALENT_TO="≭",
  NOT_LESS_THAN="≮",
  NOT_GREATER_THAN="≯",
  NEITHER_LESS_THAN_NOR_EQUAL_TO="≰",
  NEITHER_GREATER_THAN_NOR_EQUAL_TO="≱",
  LESS_THAN_OR_EQUIVALENT_TO="≲",
  GREATER_THAN_OR_EQUIVALENT_TO="≳",
  NEITHER_LESS_THAN_NOR_EQUIVALENT_TO="≴",
  NEITHER_GREATER_THAN_NOR_EQUIVALENT_TO="≵",
  LESS_THAN_OR_GREATER_THAN="≶",
  GREATER_THAN_OR_LESS_THAN="≷",
  NEITHER_LESS_THAN_NOR_GREATER_THAN="≸",
  NEITHER_GREATER_THAN_NOR_LESS_THAN="≹",
  PRECEDES="≺",
  SUCCEEDS="≻",
  PRECEDES_OR_EQUAL_TO="≼",
  SUCCEEDS_OR_EQUAL_TO="≽",
  PRECEDES_OR_EQUIVALENT_TO="≾",
  SUCCEEDS_OR_EQUIVALENT_TO="≿",
  DOES_NOT_PRECEDE="⊀",
  DOES_NOT_SUCCEED="⊁",
  SUBSET_OF="⊂",
  SUPERSET_OF="⊃",
  NOT_A_SUBSET_OF="⊄",
  NOT_A_SUPERSET_OF="⊅",
  SUBSET_OF_OR_EQUAL_TO="⊆",
  SUPERSET_OF_OR_EQUAL_TO="⊇",
  NEITHER_A_SUBSET_OF_NOR_EQUAL_TO="⊈",
  NEITHER_A_SUPERSET_OF_NOR_EQUAL_TO="⊉",
  SUBSET_OF_WITH_NOT_EQUAL_TO="⊊",
  SUPERSET_OF_WITH_NOT_EQUAL_TO="⊋",
  MULTISET="⊌",
  MULTISET_MULTIPLICATION="⊍",
  MULTISET_UNION="⊎",
  SQUARE_IMAGE_OF="⊏",
  SQUARE_ORIGINAL_OF="⊐",
  SQUARE_IMAGE_OF_OR_EQUAL_TO="⊑",
  SQUARE_ORIGINAL_OF_OR_EQUAL_TO="⊒",
  SQUARE_CAP="⊓",
  SQUARE_CUP="⊔",
  CIRCLED_PLUS="⊕",
  CIRCLED_MINUS="⊖",
  CIRCLED_TIMES="⊗",
  CIRCLED_DIVISION_SLASH="⊘",
  CIRCLED_DOT_OPERATOR="⊙",
  CIRCLED_RING_OPERATOR="⊚",
  CIRCLED_ASTERISK_OPERATOR="⊛",
  CIRCLED_EQUALS="⊜",
  CIRCLED_DASH="⊝",
  SQUARED_PLUS="⊞",
  SQUARED_MINUS="⊟",
  SQUARED_TIMES="⊠",
  SQUARED_DOT_OPERATOR="⊡",
  RIGHT_TACK="⊢",
  LEFT_TACK="⊣",
  DOWN_TACK="⊤",
  UP_TACK="⊥",
  ASSERTION="⊦",
  MODELS="⊧",
  TRUE="⊨",
  FORCES="⊩",
  TRIPLE_VERTICAL_BAR_RIGHT_TURNSTILE="⊪",
  DOUBLE_VERTICAL_BAR_DOUBLE_RIGHT_TURNSTILE="⊫",
  DOES_NOT_PROVE="⊬",
  NOT_TRUE="⊭",
  DOES_NOT_FORCE="⊮",
  NEGATED_DOUBLE_VERTICAL_BAR_DOUBLE_RIGHT_TURNSTILE="⊯",
  PRECEDES_UNDER_RELATION="⊰",
  SUCCEEDS_UNDER_RELATION="⊱",
  NORMAL_SUBGROUP_OF="⊲",
  CONTAINS_AS_NORMAL_SUBGROUP="⊳",
  NORMAL_SUBGROUP_OF_OR_EQUAL_TO="⊴",
  CONTAINS_AS_NORMAL_SUBGROUP_OR_EQUAL_TO="⊵",
  ORIGINAL_OF="⊶",
  IMAGE_OF="⊷",
  MULTIMAP="⊸",
  HERMITIAN_CONJUGATE_MATRIX="⊹",
  INTERCALATE="⊺",
  XOR="⊻",
  NAND="⊼",
  NOR="⊽",
  RIGHT_ANGLE_WITH_ARC="⊾",
  RIGHT_TRIANGLE="⊿",
  N_ARY_LOGICAL_AND="⋀",
  N_ARY_LOGICAL_OR="⋁",
  N_ARY_INTERSECTION="⋂",
  N_ARY_UNION="⋃",
  DIAMOND_OPERATOR="⋄",
  DOT_OPERATOR="⋅",
  STAR_OPERATOR="⋆",
  DIVISION_TIMES="⋇",
  BOWTIE="⋈",
  LEFT_NORMAL_FACTOR_SEMIDIRECT_PRODUCT="⋉",
  RIGHT_NORMAL_FACTOR_SEMIDIRECT_PRODUCT="⋊",
  LEFT_SEMIDIRECT_PRODUCT="⋋",
  RIGHT_SEMIDIRECT_PRODUCT="⋌",
  REVERSED_TILDE_EQUALS="⋍",
  CURLY_LOGICAL_OR="⋎",
  CURLY_LOGICAL_AND="⋏",
  DOUBLE_SUBSET="⋐",
  DOUBLE_SUPERSET="⋑",
  DOUBLE_INTERSECTION="⋒",
  DOUBLE_UNION="⋓",
  PITCHFORK="⋔",
  EQUAL_AND_PARALLEL_TO="⋕",
  LESS_THAN_WITH_DOT="⋖",
  GREATER_THAN_WITH_DOT="⋗",
  VERY_MUCH_LESS_THAN="⋘",
  VERY_MUCH_GREATER_THAN="⋙",
  LESS_THAN_EQUAL_TO_OR_GREATER_THAN="⋚",
  GREATER_THAN_EQUAL_TO_OR_LESS_THAN="⋛",
  EQUAL_TO_OR_LESS_THAN="⋜",
  EQUAL_TO_OR_GREATER_THAN="⋝",
  EQUAL_TO_OR_PRECEDES="⋞",
  EQUAL_TO_OR_SUCCEEDS="⋟",
  DOES_NOT_PRECEDE_OR_EQUAL="⋠",
  DOES_NOT_SUCCEED_OR_EQUAL="⋡",
  NOT_SQUARE_IMAGE_OF_OR_EQUAL_TO="⋢",
  NOT_SQUARE_ORIGINAL_OF_OR_EQUAL_TO="⋣",
  SQUARE_IMAGE_OF_OR_NOT_EQUAL_TO="⋤",
  SQUARE_ORIGINAL_OF_OR_NOT_EQUAL_TO="⋥",
  LESS_THAN_BUT_NOT_EQUIVALENT_TO="⋦",
  GREATER_THAN_BUT_NOT_EQUIVALENT_TO="⋧",
  PRECEDES_BUT_NOT_EQUIVALENT_TO="⋨",
  SUCCEEDS_BUT_NOT_EQUIVALENT_TO="⋩",
  NOT_NORMAL_SUBGROUP_OF="⋪",
  DOES_NOT_CONTAIN_AS_NORMAL_SUBGROUP="⋫",
  NOT_NORMAL_SUBGROUP_OF_OR_EQUAL_TO="⋬",
  DOES_NOT_CONTAIN_AS_NORMAL_SUBGROUP_OR_EQUAL="⋭",
  VERTICAL_ELLIPSIS="⋮",
  MIDLINE_HORIZONTAL_ELLIPSIS="⋯",
  UP_RIGHT_DIAGONAL_ELLIPSIS="⋰",
  DOWN_RIGHT_DIAGONAL_ELLIPSIS="⋱",
  ELEMENT_OF_WITH_LONG_HORIZONTAL_STROKE="⋲",
  ELEMENT_OF_WITH_VERTICAL_BAR_AT_END_OF_HORIZONTAL_STROKE="⋳",
  SMALL_ELEMENT_OF_WITH_VERTICAL_BAR_AT_END_OF_HORIZONTAL_STROKE="⋴",
  ELEMENT_OF_WITH_DOT_ABOVE="⋵",
  ELEMENT_OF_WITH_OVERBAR="⋶",
  SMALL_ELEMENT_OF_WITH_OVERBAR="⋷",
  ELEMENT_OF_WITH_UNDERBAR="⋸",
  ELEMENT_OF_WITH_TWO_HORIZONTAL_STROKES="⋹",
  CONTAINS_WITH_LONG_HORIZONTAL_STROKE="⋺",
  CONTAINS_WITH_VERTICAL_BAR_AT_END_OF_HORIZONTAL_STROKE="⋻",
  SMALL_CONTAINS_WITH_VERTICAL_BAR_AT_END_OF_HORIZONTAL_STROKE="⋼",
  CONTAINS_WITH_OVERBAR="⋽",
  SMALL_CONTAINS_WITH_OVERBAR="⋾",
  Z_NOTATION_BAG_MEMBERSHIP="⋿"
}

export enum EmojoptionBackup {
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

export enum FormulaSize {
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
  formulaSize: FormulaSize.Default,

  defaultLatex: {
    id: 'umi.block.sketch.latex.placeholder'
  },

  defaultEmoji: {
    id: 'umi.block.sketch.emoji.placeholder'
  },

  defaultFormula: {
    id: 'umi.block.sketch.formula.placeholder'
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
  formulaSize: FormulaSize,
  formulaOption: FormulaOption,
  emojiOption: EmojiOption,

  defaultText: string | {
    id: string,
  },
};


export default Tool;