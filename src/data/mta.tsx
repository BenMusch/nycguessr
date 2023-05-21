import type { OperatorConfiguration, IStation, ILine } from "./operator_config";

// https://en.wikipedia.org/wiki/New_York_City_Subway_nomenclature
enum MtaTrunkLine {
  // A C E
  EIGHTH_AVENUE_IND = "eightInd",
  // B D F M
  SIXTH_AVENUE_IND = "sixthInd",
  // G
  CROSSTOWN_IND = "crossInd",
  // L
  CANARSIE_BMT = "canarsie",
  // J Z
  NASSAU_BMT = "nassau",
  // N Q R W
  BROADWAY_BMT = "bwayBmt",
  // 1 2 3
  BROADWAY_IRT = "bwayIrt",
  // 4 5 6
  LEXINGTON_IRT = "lex",
  // 7
  FLUSHING_IRT = "flushing",
  // S
  SHUTTLES = "s",
}
enum MtaLine {
  A = "A",
  C = "C",
  E = "E",
  B = "B",
  D = "D",
  F = "F",
  F_EXPRESS = "F Express",
  M = "M",
  G = "G",
  L = "L",
  J = "J",
  Z = "Z",
  N = "N",
  Q = "Q",
  R = "R",
  W = "W",
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SIX_EXPRESS = "6 Express",
  SEVEN = "7",
  SEVEN_EXPRESS = "7 Express",
  S = "S",
}

const BACKGROUND_COLOR_BY_TRUNK_LINE: { [l in MtaTrunkLine]: string } = {
  [MtaTrunkLine.EIGHTH_AVENUE_IND]: "#0039a6",
  [MtaTrunkLine.SIXTH_AVENUE_IND]: "#ff6319",
  [MtaTrunkLine.CROSSTOWN_IND]: "#6cbe45",
  [MtaTrunkLine.CANARSIE_BMT]: "#a7a9ac",
  [MtaTrunkLine.NASSAU_BMT]: "#996633",
  [MtaTrunkLine.BROADWAY_BMT]: "#fccc0a",
  [MtaTrunkLine.BROADWAY_IRT]: "#ee352e",
  [MtaTrunkLine.LEXINGTON_IRT]: "#00933c",
  [MtaTrunkLine.FLUSHING_IRT]: "#b933ad",
  [MtaTrunkLine.SHUTTLES]: "#808183",
};

const mtaLines = {
  [MtaLine.A]: {
    line: MtaLine.A,
    displayName: "A",
    trunkLine: MtaTrunkLine.EIGHTH_AVENUE_IND,
  },
  [MtaLine.C]: {
    line: MtaLine.C,
    displayName: "C",
    trunkLine: MtaTrunkLine.EIGHTH_AVENUE_IND,
  },
  [MtaLine.E]: {
    line: MtaLine.E,
    displayName: "E",
    trunkLine: MtaTrunkLine.EIGHTH_AVENUE_IND,
  },
  [MtaLine.B]: {
    line: MtaLine.B,
    displayName: "B",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLine.D]: {
    line: MtaLine.D,
    displayName: "D",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLine.F]: {
    line: MtaLine.F,
    displayName: "F",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLine.F_EXPRESS]: {
    line: MtaLine.F_EXPRESS,
    displayName: "F",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLine.M]: {
    line: MtaLine.M,
    displayName: "M",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLine.G]: {
    line: MtaLine.G,
    displayName: "G",
    trunkLine: MtaTrunkLine.CROSSTOWN_IND,
  },
  [MtaLine.L]: {
    line: MtaLine.L,
    displayName: "L",
    trunkLine: MtaTrunkLine.CANARSIE_BMT,
  },
  [MtaLine.J]: {
    line: MtaLine.J,
    displayName: "J",
    trunkLine: MtaTrunkLine.NASSAU_BMT,
  },
  [MtaLine.Z]: {
    line: MtaLine.Z,
    displayName: "Z",
    trunkLine: MtaTrunkLine.NASSAU_BMT,
  },
  [MtaLine.N]: {
    line: MtaLine.N,
    displayName: "N",
    trunkLine: MtaTrunkLine.BROADWAY_BMT,
  },
  [MtaLine.Q]: {
    line: MtaLine.Q,
    displayName: "Q",
    trunkLine: MtaTrunkLine.BROADWAY_BMT,
  },
  [MtaLine.R]: {
    line: MtaLine.R,
    displayName: "R",
    trunkLine: MtaTrunkLine.BROADWAY_BMT,
  },
  [MtaLine.W]: {
    line: MtaLine.W,
    displayName: "W",
    trunkLine: MtaTrunkLine.BROADWAY_BMT,
  },
  [MtaLine.ONE]: {
    line: MtaLine.ONE,
    displayName: "1",
    trunkLine: MtaTrunkLine.BROADWAY_IRT,
  },
  [MtaLine.TWO]: {
    line: MtaLine.TWO,
    displayName: "2",
    trunkLine: MtaTrunkLine.BROADWAY_IRT,
  },
  [MtaLine.THREE]: {
    line: MtaLine.THREE,
    displayName: "3",
    trunkLine: MtaTrunkLine.BROADWAY_IRT,
  },
  [MtaLine.FOUR]: {
    line: MtaLine.FOUR,
    displayName: "4",
    trunkLine: MtaTrunkLine.LEXINGTON_IRT,
  },
  [MtaLine.FIVE]: {
    line: MtaLine.FIVE,
    displayName: "5",
    trunkLine: MtaTrunkLine.LEXINGTON_IRT,
  },
  [MtaLine.SIX]: {
    line: MtaLine.SIX,
    displayName: "6",
    trunkLine: MtaTrunkLine.LEXINGTON_IRT,
  },
  [MtaLine.SIX_EXPRESS]: {
    line: MtaLine.SIX_EXPRESS,
    displayName: "6",
    trunkLine: MtaTrunkLine.LEXINGTON_IRT,
  },
  [MtaLine.SEVEN]: {
    line: MtaLine.SEVEN,
    displayName: "7",
    trunkLine: MtaTrunkLine.FLUSHING_IRT,
  },
  [MtaLine.SEVEN_EXPRESS]: {
    line: MtaLine.SEVEN_EXPRESS,
    displayName: "7",
    trunkLine: MtaTrunkLine.FLUSHING_IRT,
  },
  [MtaLine.S]: {
    line: MtaLine.S,
    displayName: "S",
    trunkLine: MtaTrunkLine.SHUTTLES,
  },
};

const mtaLinesByTrunkLine: {
  [k in MtaTrunkLine]: ILine<MtaTrunkLine, MtaLine>[];
} = {
  [MtaTrunkLine.EIGHTH_AVENUE_IND]: [
    mtaLines[MtaLine.A],
    mtaLines[MtaLine.C],
    mtaLines[MtaLine.E],
  ],
  [MtaTrunkLine.SHUTTLES]: [mtaLines[MtaLine.S]],
  [MtaTrunkLine.SIXTH_AVENUE_IND]: [
    mtaLines[MtaLine.B],
    mtaLines[MtaLine.D],
    mtaLines[MtaLine.F],
    mtaLines[MtaLine.F_EXPRESS],
    mtaLines[MtaLine.M],
  ],
  [MtaTrunkLine.CROSSTOWN_IND]: [mtaLines[MtaLine.G]],
  [MtaTrunkLine.CANARSIE_BMT]: [mtaLines[MtaLine.L]],
  [MtaTrunkLine.NASSAU_BMT]: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
  [MtaTrunkLine.BROADWAY_BMT]: [
    mtaLines[MtaLine.N],
    mtaLines[MtaLine.Q],
    mtaLines[MtaLine.R],
    mtaLines[MtaLine.W],
  ],
  [MtaTrunkLine.BROADWAY_IRT]: [
    mtaLines[MtaLine.ONE],
    mtaLines[MtaLine.TWO],
    mtaLines[MtaLine.THREE],
  ],
  [MtaTrunkLine.LEXINGTON_IRT]: [
    mtaLines[MtaLine.FOUR],
    mtaLines[MtaLine.FIVE],
    mtaLines[MtaLine.SIX],
    mtaLines[MtaLine.SIX_EXPRESS],
  ],
  [MtaTrunkLine.FLUSHING_IRT]: [
    mtaLines[MtaLine.SEVEN],
    mtaLines[MtaLine.SEVEN_EXPRESS],
  ],
};

const mtaStations: IStation<MtaTrunkLine, MtaLine>[] = [
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "Astor Pl",
    coordinates: [[-73.99106999861966, 40.73005400028978]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "50th St",
    coordinates: [[-73.98384899986625, 40.76172799961419]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
    ],
    name: "Bergen St",
    coordinates: [[-73.97499915116808, 40.68086213682956]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "Pennsylvania Ave",
    coordinates: [[-73.89488591154061, 40.66471445143568]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "238th St",
    coordinates: [[-73.90087000018522, 40.88466700064975]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.B]],
    name: "Cathedral Pkwy (110th St)",
    coordinates: [[-73.95806670661364, 40.800581558114956]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Kingston - Throop Aves",
    coordinates: [[-73.94085899871263, 40.67991899941601]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "65th St",
    coordinates: [[-73.8987883783301, 40.74971952935675]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "36th St",
    coordinates: [[-73.92901818461539, 40.75196004401078]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Van Siclen Ave",
    coordinates: [[-73.89165772702445, 40.67802821447783]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Norwood Ave",
    coordinates: [[-73.87962599910783, 40.68152000045683]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "104th-102nd Sts",
    coordinates: [[-73.84443500029684, 40.69516599823373]],
  },
  {
    lines: [
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
    ],
    name: "DeKalb Ave",
    coordinates: [[-73.98177094440949, 40.690648119969794]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "Beach 105th St",
    coordinates: [[-73.82758075034528, 40.58326843810286]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "Beach 90th St",
    coordinates: [[-73.81365140419632, 40.58809156457325]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Freeman St",
    coordinates: [[-73.89175225349464, 40.829987446384116]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Intervale Ave",
    coordinates: [[-73.89661738461646, 40.822142131170786]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "182nd-183rd Sts",
    coordinates: [[-73.90074099998965, 40.85609299881864]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "174th-175th Sts",
    coordinates: [[-73.91013600050078, 40.84589999983414]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "167th St",
    coordinates: [[-73.91843200082253, 40.83376899862797]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN], mtaLines[MtaLine.SEVEN_EXPRESS]],
    name: "Mets - Willets Point",
    coordinates: [[-73.8456249984179, 40.75462199881262]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN], mtaLines[MtaLine.SEVEN_EXPRESS]],
    name: "Junction Blvd",
    coordinates: [[-73.86952700103515, 40.74914499948836]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN], mtaLines[MtaLine.SEVEN_EXPRESS]],
    name: "Flushing - Main St",
    coordinates: [[-73.83003000262508, 40.75959999915012]],
  },
  {
    lines: [mtaLines[MtaLine.SIX], mtaLines[MtaLine.SIX_EXPRESS]],
    name: "Buhre Ave",
    coordinates: [[-73.83256900003744, 40.846809998885504]],
  },
  {
    lines: [mtaLines[MtaLine.SIX], mtaLines[MtaLine.SIX_EXPRESS]],
    name: "3rd Ave - 138th St",
    coordinates: [[-73.92613800014134, 40.81047600117261]],
  },
  {
    lines: [mtaLines[MtaLine.SIX], mtaLines[MtaLine.SIX_EXPRESS]],
    name: "Castle Hill Ave",
    coordinates: [[-73.85122199961472, 40.83425499825462]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
      mtaLines[MtaLine.J],
      mtaLines[MtaLine.Z],
    ],
    name: "Brooklyn Bridge - City Hall/Chambers St",
    coordinates: [
      [-74.0041310005885, 40.713064999433136],
      [-74.00340673031336, 40.71323378962671],
    ],
  },
  {
    lines: [mtaLines[MtaLine.SIX], mtaLines[MtaLine.SIX_EXPRESS]],
    name: "Zerega Ave",
    coordinates: [[-73.8470359987544, 40.836488000608156]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
      mtaLines[MtaLine.SEVEN],
      mtaLines[MtaLine.SEVEN_EXPRESS],
      mtaLines[MtaLine.S],
    ],
    name: "Grand Central - 42nd St",
    coordinates: [
      [-73.9767132992584, 40.75180742981634],
      [-73.97918899989101, 40.75276866674217],
      [-73.97604100111508, 40.751431000286864],
    ],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "33rd St",
    coordinates: [[-73.98207600148947, 40.74608099909145]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "96th St",
    coordinates: [[-73.9510700015425, 40.78567199998607]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "77th St",
    coordinates: [[-73.95987399886047, 40.77362000074615]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Chauncey St",
    coordinates: [[-73.91038357033376, 40.68285130087804]],
  },
  {
    lines: [mtaLines[MtaLine.D], mtaLines[MtaLine.N], mtaLines[MtaLine.R]],
    name: "Union St",
    coordinates: [[-73.98310999909673, 40.67731566735096]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "Elmhurst Ave",
    coordinates: [[-73.8820347465864, 40.74237007972169]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Ralph Ave",
    coordinates: [[-73.92078599933306, 40.678822000873375]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Pelham Pkwy",
    coordinates: [[-73.86748067850041, 40.8571924091606]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Gun Hill Rd",
    coordinates: [[-73.86613410538703, 40.877839385172024]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Nereid Ave (238 St)",
    coordinates: [[-73.8543153107622, 40.898286515575286]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
    ],
    name: "Franklin Ave",
    coordinates: [[-73.9580997367769, 40.67076515344894]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Simpson St",
    coordinates: [[-73.89306639507903, 40.823976841237396]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Bronx Park East",
    coordinates: [[-73.86835609178098, 40.848768666338934]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Winthrop St",
    coordinates: [[-73.95007934590994, 40.65665931376077]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "Van Siclen Ave",
    coordinates: [[-73.88940491730106, 40.665517963059635]],
  },
  {
    lines: [mtaLines[MtaLine.SIX]],
    name: "E 149th St",
    coordinates: [[-73.90409799875945, 40.81211799827203]],
  },
  {
    lines: [mtaLines[MtaLine.SIX]],
    name: "Morrison Av - Soundview",
    coordinates: [[-73.87451599929486, 40.82952100156747]],
  },
  {
    lines: [mtaLines[MtaLine.SIX]],
    name: "Whitlock Ave",
    coordinates: [[-73.8862829985325, 40.82652500055904]],
  },
  {
    lines: [mtaLines[MtaLine.SIX]],
    name: "St Lawrence Ave",
    coordinates: [[-73.86761799923673, 40.8315090005233]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN], mtaLines[MtaLine.SEVEN_EXPRESS]],
    name: "Woodside - 61st St",
    coordinates: [[-73.90298400173006, 40.745630001138395]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Far Rockaway - Mott Ave",
    coordinates: [[-73.75540499924732, 40.603995001687544]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.B]],
    name: "72nd St",
    coordinates: [[-73.976336575218, 40.77551939729258]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.B]],
    name: "96th St",
    coordinates: [[-73.96460245687166, 40.79161879767014]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.ONE]],
    name: "168th St",
    coordinates: [
      [-73.93956099985425, 40.84071899990795],
      [-73.94013299907257, 40.840555999148535],
    ],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "Kingsbridge Rd",
    coordinates: [[-73.8935090000331, 40.86697799999945]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.S], mtaLines[MtaLine.Q]],
    name: "Prospect Park",
    coordinates: [[-73.96203130426609, 40.6616334551018]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "55th St",
    coordinates: [[-73.99534882595742, 40.63147876093745]],
  },
  {
    lines: [mtaLines[MtaLine.E]],
    name: "Jamaica - Van Wyck",
    coordinates: [[-73.81701287135405, 40.70289855287313]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.F]],
    name: "Kew Gardens - Union Tpke",
    coordinates: [[-73.8303702709878, 40.714034819571026]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Sutphin Blvd - Archer Av",
    coordinates: [[-73.80800471963833, 40.700382424235]],
  },
  {
    lines: [
      mtaLines[MtaLine.SEVEN],
      mtaLines[MtaLine.SEVEN_EXPRESS],
      mtaLines[MtaLine.E],
      mtaLines[MtaLine.M],
      mtaLines[MtaLine.G],
    ],
    name: "Court Sq - 23rd St",
    coordinates: [
      [-73.94605470266329, 40.747768121414325],
      [-73.94381559597835, 40.74630503357145],
      [-73.94526400039679, 40.74702299889643],
    ],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "67th Ave",
    coordinates: [[-73.85286048434907, 40.726505475813006]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "Grand Ave - Newtown",
    coordinates: [[-73.87722085669182, 40.736813418197144]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Ditmas Ave",
    coordinates: [[-73.97817199965161, 40.63611866666291]],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "Classon Ave",
    coordinates: [[-73.95999000137212, 40.68888900026455]],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "Broadway",
    coordinates: [[-73.95031225606621, 40.706126576274166]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Sutter Ave",
    coordinates: [[-73.9019160004208, 40.66914500061398]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Wilson Ave",
    coordinates: [[-73.90395860491864, 40.68886654246024]],
  },
  {
    lines: [mtaLines[MtaLine.J]],
    name: "Halsey St",
    coordinates: [[-73.9166388842194, 40.686415270704344]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.M]],
    name: "Lorimer St",
    coordinates: [[-73.94735499884204, 40.703844000042096]],
  },
  {
    lines: [mtaLines[MtaLine.N]],
    name: "8th Ave",
    coordinates: [[-74.01151599772157, 40.634970999647166]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.W]],
    name: "36th Ave",
    coordinates: [[-73.929861999118, 40.7564420005104]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.W]],
    name: "Broadway",
    coordinates: [[-73.92582299919906, 40.761431998800546]],
  },
  {
    lines: [
      mtaLines[MtaLine.ONE],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
      mtaLines[MtaLine.SEVEN],
      mtaLines[MtaLine.SEVEN_EXPRESS],
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.E],
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
      mtaLines[MtaLine.S],
    ],
    name: "Times Sq - 42nd St/Port Authority Bus Terminal",
    coordinates: [
      [-73.98676800153976, 40.75461199851542],
      [-73.98622899953202, 40.755983000570076],
      [-73.98769099825152, 40.755477001982506],
      [-73.98749500051885, 40.75528999995681],
      [-73.98973500085859, 40.757307998551504],
    ],
  },
  {
    lines: [mtaLines[MtaLine.S]],
    name: "Park Pl",
    coordinates: [[-73.95762400074634, 40.67477166685263]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "111th St",
    coordinates: [[-73.83216299845388, 40.68433100001238]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "86th St",
    coordinates: [[-73.97621799859327, 40.78864400073892]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "233rd St",
    coordinates: [[-73.85736239521543, 40.89314324138378]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "66th St - Lincoln Ctr",
    coordinates: [[-73.98220899995783, 40.77344000052039]],
  },
  {
    lines: [mtaLines[MtaLine.SIX], mtaLines[MtaLine.SIX_EXPRESS]],
    name: "Hunts Point Ave",
    coordinates: [[-73.89054900017344, 40.82094799852307]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "Canal St",
    coordinates: [[-74.0062770001748, 40.72285399778783]],
  },
  {
    lines: [mtaLines[MtaLine.SIX], mtaLines[MtaLine.SIX_EXPRESS]],
    name: "Middletown Rd",
    coordinates: [[-73.83632199755944, 40.84386300128381]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "23rd St",
    coordinates: [[-73.98659900207888, 40.739864000474604]],
  },
  {
    lines: [
      mtaLines[MtaLine.ONE],
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
    ],
    name: "59th St - Columbus Circle",
    coordinates: [
      [-73.98164872301398, 40.768249531776064],
      [-73.98192900232715, 40.76824700063689],
    ],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN], mtaLines[MtaLine.SEVEN_EXPRESS]],
    name: "Hunters Point Ave",
    coordinates: [[-73.9489160009391, 40.74221599986316]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "23rd St",
    coordinates: [[-73.9956570016487, 40.74408099989751]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "Houston St",
    coordinates: [[-74.00536700180581, 40.728251000730204]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "104th St",
    coordinates: [[-73.83768300060997, 40.681711001091195]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "Broad Channel",
    coordinates: [[-73.81583268782963, 40.60840218069683]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "Ocean Pkwy",
    coordinates: [[-73.96850099975177, 40.57631166708091]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN], mtaLines[MtaLine.SEVEN_EXPRESS]],
    name: "Vernon Blvd - Jackson Ave",
    coordinates: [[-73.95358099875249, 40.74262599969749]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "68th St - Hunter College",
    coordinates: [[-73.96387000158042, 40.76814100049679]],
  },
  {
    lines: [
      mtaLines[MtaLine.SEVEN],
      mtaLines[MtaLine.SEVEN_EXPRESS],
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.W],
    ],
    name: "Queensboro Plz",
    coordinates: [[-73.9401635351909, 40.750635651014804]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "Rockaway Blvd",
    coordinates: [[-73.8438529979573, 40.680428999588415]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
      mtaLines[MtaLine.L],
    ],
    name: "Union Sq - 14th St",
    coordinates: [
      [-73.99053886181645, 40.73587226699812],
      [-73.98995099881881, 40.734673000996125],
      [-73.99066976901818, 40.73476331217923],
    ],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "Bedford - Nostrand Aves",
    coordinates: [[-73.95352200064022, 40.68962700158444]],
  },
  {
    lines: [mtaLines[MtaLine.G], mtaLines[MtaLine.F]],
    name: "15th St - Prospect Park",
    coordinates: [[-73.97973580592873, 40.66003568810021]],
  },
  {
    lines: [mtaLines[MtaLine.G], mtaLines[MtaLine.F]],
    name: "7th Ave",
    coordinates: [[-73.98025117900944, 40.66624469001985]],
  },
  {
    lines: [mtaLines[MtaLine.G], mtaLines[MtaLine.F]],
    name: "Ft Hamilton Pkwy",
    coordinates: [[-73.97577599917474, 40.65078166803418]],
  },
  {
    lines: [mtaLines[MtaLine.G], mtaLines[MtaLine.F]],
    name: "Church Ave",
    coordinates: [[-73.97972116229084, 40.64427200012998]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "Beverly Rd",
    coordinates: [[-73.96435779623125, 40.64390459860419]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.Q]],
    name: "Church Ave",
    coordinates: [[-73.96288246192114, 40.65049324646484]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.Q]],
    name: "Newkirk Ave",
    coordinates: [[-73.96269486837261, 40.63514193733789]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "Parkside Ave",
    coordinates: [[-73.96145343987648, 40.65507304163716]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
    ],
    name: "Grand Army Plaza",
    coordinates: [[-73.9709563319228, 40.6752946951032]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "Atlantic Av - Barclay's Center",
    coordinates: [
      [-73.97678343963167, 40.684488323453685],
      [-73.97754993539385, 40.68442016526762],
      [-73.97880999956767, 40.683665667279435],
    ],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Rockaway Ave",
    coordinates: [[-73.91194599726617, 40.678339999883505]],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "Fulton St",
    coordinates: [[-73.97537499833149, 40.68711899950771]],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "Clinton - Washington Aves",
    coordinates: [[-73.9667959986695, 40.68809400106055]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.Q]],
    name: "7th Ave",
    coordinates: [[-73.97285279191024, 40.67710217983294]],
  },
  {
    lines: [
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.R],
    ],
    name: "Borough Hall/Court St",
    coordinates: [
      [-73.99015100090539, 40.692403999991036],
      [-73.99181830901125, 40.694196480776995],
      [-73.98999799960687, 40.693218999611084],
    ],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Aqueduct Racetrack",
    coordinates: [[-73.83591899965162, 40.672096999172844]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE]],
    name: "Morris Park",
    coordinates: [[-73.86049500117254, 40.85436399966426]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE]],
    name: "Pelham Pkwy",
    coordinates: [[-73.85535900043564, 40.858984999820116]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Nostrand Ave",
    coordinates: [[-73.95042600099683, 40.68043800006226]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
    ],
    name: "Nevins St",
    coordinates: [[-73.98040679874578, 40.68831058019022]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
    ],
    name: "Eastern Pkwy - Bklyn Museum",
    coordinates: [[-73.96422203748425, 40.67203223545925]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Beverly Rd",
    coordinates: [[-73.94884798381702, 40.64512351894373]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Church Ave",
    coordinates: [[-73.94945514035334, 40.6508606878022]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Newkirk Ave",
    coordinates: [[-73.94829990822407, 40.63999124275311]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Brooklyn College - Flatbush Ave",
    coordinates: [[-73.94754120734406, 40.63284240700742]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Sterling St",
    coordinates: [[-73.95072891124937, 40.6627729934283]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "Crown Hts - Utica Ave",
    coordinates: [[-73.93293256081851, 40.66897831107809]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "Kingston Ave",
    coordinates: [[-73.94215978392963, 40.66948144864978]],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "Nassau Ave",
    coordinates: [[-73.95118300016523, 40.724479997808274]],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "Greenpoint Ave",
    coordinates: [[-73.95442500146235, 40.73126699971465]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z], mtaLines[MtaLine.M]],
    name: "Marcy Ave",
    coordinates: [[-73.95783200075729, 40.708383000017925]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.M]],
    name: "Hewes St",
    coordinates: [[-73.95348800038457, 40.706889998054]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.FIVE]],
    name: "138th St - Grand Concourse",
    coordinates: [[-73.92984899935611, 40.81322399958908]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M]],
    name: "5th Ave - 53rd St",
    coordinates: [[-73.9752485052734, 40.76008683231326]],
  },
  {
    lines: [
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
      mtaLines[MtaLine.E],
      mtaLines[MtaLine.M],
    ],
    name: "Lexington Ave - 53rd St/51st St",
    coordinates: [
      [-73.96907237490204, 40.75746830782865],
      [-73.97192000069982, 40.75710699989316],
    ],
  },
  {
    lines: [
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "28th St",
    coordinates: [[-73.98869800128737, 40.74545399979951]],
  },
  {
    lines: [
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.F_EXPRESS],
      mtaLines[MtaLine.M],
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "Herald Sq - 34th St",
    coordinates: [
      [-73.9879368338264, 40.74964456009442],
      [-73.98777189072918, 40.74978939990011],
    ],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "1st Ave",
    coordinates: [[-73.98168087489128, 40.73097497580066]],
  },
  {
    lines: [mtaLines[MtaLine.L], mtaLines[MtaLine.G]],
    name: "Metropolitan Ave/Lorimer St",
    coordinates: [
      [-73.9514239994525, 40.71277400073426],
      [-73.95024799996972, 40.71407200064717],
    ],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Grand St",
    coordinates: [[-73.94049699874644, 40.71157600064823]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Graham Ave",
    coordinates: [[-73.94394399869037, 40.714575998363635]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Bedford Ave",
    coordinates: [[-73.95666499806525, 40.71717399858899]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Montrose Ave",
    coordinates: [[-73.93979284713505, 40.70739106438455]],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "21st St",
    coordinates: [[-73.9495999997552, 40.7441286664954]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.W]],
    name: "39th Ave",
    coordinates: [[-73.93285137679598, 40.75276306140845]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "145th St",
    coordinates: [[-73.95035999879713, 40.82655099962194]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "157th St",
    coordinates: [[-73.94488999901047, 40.8340410001399]],
  },
  {
    lines: [
      mtaLines[MtaLine.ONE],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
    ],
    name: "96th St",
    coordinates: [[-73.97232299915696, 40.79391900121471]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "103rd St",
    coordinates: [[-73.96837899960818, 40.799446000334825]],
  },
  {
    lines: [mtaLines[MtaLine.TWO], mtaLines[MtaLine.THREE]],
    name: "Central Park North (110th St)",
    coordinates: [[-73.95182200176913, 40.79907499977324]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.B]],
    name: "103rd St",
    coordinates: [[-73.96137008267617, 40.796060739904526]],
  },
  {
    lines: [
      mtaLines[MtaLine.ONE],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
    ],
    name: "72nd St",
    coordinates: [[-73.98197000159583, 40.77845300068614]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.B]],
    name: "81st St",
    coordinates: [[-73.97209794937208, 40.78134608418206]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.F]],
    name: "75th Ave",
    coordinates: [[-73.83692369387158, 40.71804465348743]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.B]],
    name: "86th St",
    coordinates: [[-73.96882849429672, 40.78582304678557]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "Cathedral Pkwy (110th St)",
    coordinates: [[-73.9668470005456, 40.80396699961484]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "116th St - Columbia University",
    coordinates: [[-73.96410999757751, 40.807722001230864]],
  },
  {
    lines: [mtaLines[MtaLine.TWO], mtaLines[MtaLine.THREE]],
    name: "125th St",
    coordinates: [[-73.94549500011411, 40.807753999182815]],
  },
  {
    lines: [mtaLines[MtaLine.TWO], mtaLines[MtaLine.THREE]],
    name: "135th St",
    coordinates: [[-73.94077000106708, 40.8142290003391]],
  },
  {
    lines: [mtaLines[MtaLine.TWO], mtaLines[MtaLine.THREE]],
    name: "116th St",
    coordinates: [[-73.94962500096905, 40.802097999133004]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "Tremont Ave",
    coordinates: [[-73.90522700122354, 40.850409999510234]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "137th St - City College",
    coordinates: [[-73.95367600087873, 40.82200799968475]],
  },
  {
    lines: [mtaLines[MtaLine.THREE]],
    name: "145th St",
    coordinates: [[-73.93624499873299, 40.82042099969279]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "176th St",
    coordinates: [[-73.91179399884471, 40.8484800012369]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "Burnside Ave",
    coordinates: [[-73.9076840015997, 40.85345300155693]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "170th St",
    coordinates: [[-73.91339999846983, 40.83930599964156]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "181st St",
    coordinates: [[-73.9335959996056, 40.84950499974065]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "191st St",
    coordinates: [[-73.92941199742039, 40.85522500175836]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "175th St",
    coordinates: [[-73.93970399761596, 40.84739100072403]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Beach 44th St",
    coordinates: [[-73.77601299999507, 40.59294299908617]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Beach 60th St",
    coordinates: [[-73.7885219980118, 40.59237400121235]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "Beach 98th St",
    coordinates: [[-73.82052058959523, 40.58538569133279]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "Rockaway Park - Beach 116 St",
    coordinates: [[-73.83559008701239, 40.580955865573515]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Beach 36th St",
    coordinates: [[-73.76817499939688, 40.59539800166876]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Beach 25th St",
    coordinates: [[-73.76135299762073, 40.60006600105881]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Parsons Blvd",
    coordinates: [[-73.80328900021885, 40.707571999615695]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "169th St",
    coordinates: [[-73.79347419927721, 40.710517502784]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN]],
    name: "103rd St - Corona Plaza",
    coordinates: [[-73.86269999830412, 40.749865000555545]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN]],
    name: "111th St",
    coordinates: [[-73.85533399834884, 40.75172999941711]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "63rd Dr - Rego Park",
    coordinates: [[-73.86161820097203, 40.729763972422425]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "Grant Ave",
    coordinates: [[-73.86504999877702, 40.67704400054478]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "79th St",
    coordinates: [[-73.97991700056134, 40.78393399959032]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Atlantic Ave",
    coordinates: [[-73.9030969995401, 40.67534466640805]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "Christopher St - Sheridan Sq",
    coordinates: [[-74.00290599855235, 40.73342200104225]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "Ozone Park - Lefferts Blvd",
    coordinates: [[-73.82579799906613, 40.68595099878361]],
  },
  {
    lines: [mtaLines[MtaLine.F], mtaLines[MtaLine.Q]],
    name: "W 8th St - NY Aquarium",
    coordinates: [[-73.97595787413822, 40.576033818103646]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "28th St",
    coordinates: [[-73.99336500134324, 40.74721499918219]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "28th St",
    coordinates: [[-73.98426400110407, 40.743069999259035]],
  },
  {
    lines: [mtaLines[MtaLine.SIX], mtaLines[MtaLine.SIX_EXPRESS]],
    name: "Pelham Bay Park",
    coordinates: [[-73.82812100059289, 40.85246199951662]],
  },
  {
    lines: [mtaLines[MtaLine.SIX], mtaLines[MtaLine.SIX_EXPRESS]],
    name: "Westchester Sq - E Tremont Ave",
    coordinates: [[-73.84295199925012, 40.839892001013915]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "18th St",
    coordinates: [[-73.99787100060406, 40.741039999802105]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Beach 67th St",
    coordinates: [[-73.7969239998421, 40.59092700078133]],
  },
  {
    lines: [
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.E],
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.M],
    ],
    name: "W 4th St - Washington Sq",
    coordinates: [
      [-74.00049500225435, 40.73233799774325],
      [-74.00030814755975, 40.732254493367876],
    ],
  },
  {
    lines: [mtaLines[MtaLine.J]],
    name: "85th St - Forest Pky",
    coordinates: [[-73.86008700006875, 40.69242699966103]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Woodhaven Blvd",
    coordinates: [[-73.85205199740794, 40.69370399880105]],
  },
  {
    lines: [mtaLines[MtaLine.J]],
    name: "111th St",
    coordinates: [[-73.83679338454697, 40.697114810696476]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "121st St",
    coordinates: [[-73.82834900017954, 40.700481998515315]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Halsey St",
    coordinates: [[-73.90393400118631, 40.69551800114878]],
  },
  {
    lines: [mtaLines[MtaLine.L], mtaLines[MtaLine.M]],
    name: "Myrtle - Wyckoff Aves",
    coordinates: [
      [-73.9109757182647, 40.699471062427136],
      [-73.91217899939602, 40.69945400090837],
    ],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "New Lots Ave",
    coordinates: [[-73.88411070800329, 40.6663149325969]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Van Siclen Ave",
    coordinates: [[-73.8903580002471, 40.67270999906104]],
  },
  {
    lines: [mtaLines[MtaLine.J]],
    name: "Cleveland St",
    coordinates: [[-73.8851940021643, 40.679777998961164]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Livonia Ave",
    coordinates: [[-73.90056237226057, 40.66405727094644]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "Junius St",
    coordinates: [[-73.90244864183562, 40.66358900181724]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "Rockaway Ave",
    coordinates: [[-73.90895833584449, 40.66261748815223]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Canarsie - Rockaway Pkwy",
    coordinates: [[-73.90185000017287, 40.64665366739528]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "E 105th St",
    coordinates: [[-73.89954769388724, 40.65046878544699]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "Saratoga Ave",
    coordinates: [[-73.91633025007947, 40.6615297898075]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "Sutter Ave - Rutland Road",
    coordinates: [[-73.92252118536001, 40.66476678877493]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "New Lots Ave",
    coordinates: [[-73.89927796057142, 40.65891477368527]],
  },
  {
    lines: [
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.J],
      mtaLines[MtaLine.Z],
      mtaLines[MtaLine.L],
    ],
    name: "Broadway Junction",
    coordinates: [
      [-73.90428999746412, 40.67936600147369],
      [-73.90311757920684, 40.67845624842869],
      [-73.90531600055341, 40.67833366608023],
    ],
  },
  {
    lines: [mtaLines[MtaLine.J]],
    name: "Alabama Ave",
    coordinates: [[-73.89852600159652, 40.676998000003756]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Shepherd Ave",
    coordinates: [[-73.88074999747269, 40.6741300014559]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Crescent St",
    coordinates: [[-73.87392925215778, 40.68315265707736]],
  },
  {
    lines: [mtaLines[MtaLine.J]],
    name: "Cypress Hills",
    coordinates: [[-73.87332199882995, 40.689616000838754]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "75th St - Eldert Ln",
    coordinates: [[-73.86728799944963, 40.691290001246735]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN]],
    name: "69th St",
    coordinates: [[-73.8964029993185, 40.746324999410284]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "Woodhaven Blvd - Queens Mall",
    coordinates: [[-73.86943208612348, 40.73309737380972]],
  },
  {
    lines: [mtaLines[MtaLine.M]],
    name: "Seneca Ave",
    coordinates: [[-73.90758199885423, 40.70291899894902]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "DeKalb Ave",
    coordinates: [[-73.91823200219723, 40.70369299961644]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN]],
    name: "52nd St",
    coordinates: [[-73.91254899891254, 40.744149001021576]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "46th St",
    coordinates: [[-73.91352174995538, 40.756316952608096]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "Northern Blvd",
    coordinates: [[-73.90606508052358, 40.752824829236076]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN]],
    name: "46th St",
    coordinates: [[-73.91843500103973, 40.74313200060382]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN]],
    name: "82nd St - Jackson Hts",
    coordinates: [[-73.88369700071884, 40.747658999559135]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN]],
    name: "90th St - Elmhurst Av",
    coordinates: [[-73.87661299986985, 40.74840800060913]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Howard Beach - JFK Airport",
    coordinates: [[-73.83030100071032, 40.66047600004959]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Aqueduct - North Conduit Av",
    coordinates: [[-73.83405799948723, 40.668234001699815]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.F]],
    name: "Briarwood - Van Wyck Blvd",
    coordinates: [[-73.82069263637443, 40.70916181536946]],
  },
  {
    lines: [
      mtaLines[MtaLine.E],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.M],
      mtaLines[MtaLine.R],
    ],
    name: "Forest Hills - 71st Av",
    coordinates: [[-73.84451672012669, 40.72159430953587]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Sutphin Blvd",
    coordinates: [[-73.81083299897232, 40.70541799906764]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Jamaica Ctr - Parsons / Archer",
    coordinates: [[-73.80109632298924, 40.70206737621188]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "225th St",
    coordinates: [[-73.86021461772737, 40.88802825863786]],
  },
  {
    lines: [mtaLines[MtaLine.SIX]],
    name: "Elder Ave",
    coordinates: [[-73.87915899874777, 40.82858400108929]],
  },
  {
    lines: [mtaLines[MtaLine.SIX]],
    name: "Longwood Ave",
    coordinates: [[-73.89643499897414, 40.816103999972405]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.W]],
    name: "Astoria Blvd",
    coordinates: [[-73.91809500109238, 40.77003699949086]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.W]],
    name: "Astoria - Ditmars Blvd",
    coordinates: [[-73.9120340001031, 40.775035666523664]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Jackson Ave",
    coordinates: [[-73.9077019387083, 40.81643746686396]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Prospect Ave",
    coordinates: [[-73.90177778730917, 40.81948726483844]],
  },
  {
    lines: [mtaLines[MtaLine.SIX]],
    name: "Cypress Ave",
    coordinates: [[-73.91404199994753, 40.8053680007636]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "174th St",
    coordinates: [[-73.88769359812888, 40.837195550170605]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Allerton Ave",
    coordinates: [[-73.86723422851625, 40.86548337793927]],
  },
  {
    lines: [mtaLines[MtaLine.SIX]],
    name: "E 143rd St - St Mary's St",
    coordinates: [[-73.90765699936489, 40.80871900090143]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "Kingsbridge Rd",
    coordinates: [[-73.89717400101743, 40.867760000885795]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "Bedford Park Blvd - Lehman College",
    coordinates: [[-73.89006400069478, 40.87341199980121]],
  },
  {
    lines: [mtaLines[MtaLine.THREE]],
    name: "Harlem - 148 St",
    coordinates: [[-73.93647000005559, 40.82388000080457]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "Mt Eden Ave",
    coordinates: [[-73.9146849986034, 40.84443400092679]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "Fordham Rd",
    coordinates: [[-73.89774900102401, 40.861295998683495]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "170th St",
    coordinates: [[-73.91779099745928, 40.84007499993004]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "Bedford Park Blvd",
    coordinates: [[-73.88713799889574, 40.87324399861646]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "Marble Hill - 225th St",
    coordinates: [[-73.90983099923551, 40.87456099941789]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "231st St",
    coordinates: [[-73.90483400107873, 40.87885599817935]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "215th St",
    coordinates: [[-73.91527899954356, 40.86944399946045]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "207th St",
    coordinates: [[-73.91881900132312, 40.864614000525854]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Inwood - 207th St",
    coordinates: [[-73.91989900100465, 40.86807199999737]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "Van Cortlandt Park - 242nd St",
    coordinates: [[-73.89858300049647, 40.88924800011476]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "West Farms Sq - E Tremont Av",
    coordinates: [[-73.87996127877184, 40.84020763241799]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "219th St",
    coordinates: [[-73.8625097078866, 40.883887974625274]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "Mosholu Pkwy",
    coordinates: [[-73.88465499988732, 40.87974999947229]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "Norwood - 205th St",
    coordinates: [[-73.87885499918691, 40.87481100011182]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "Burke Ave",
    coordinates: [[-73.86705361747603, 40.87125880254771]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE]],
    name: "Baychester Ave",
    coordinates: [[-73.83859099802153, 40.87866300037311]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE]],
    name: "Eastchester - Dyre Ave",
    coordinates: [[-73.8308340021742, 40.88829999901007]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Jamaica - 179th St",
    coordinates: [[-73.78381700176453, 40.712645666744045]],
  },
  {
    lines: [mtaLines[MtaLine.TWO]],
    name: "Wakefield - 241st St",
    coordinates: [[-73.8506199987954, 40.903125000541245]],
  },
  {
    lines: [mtaLines[MtaLine.S]],
    name: "Botanic Garden",
    coordinates: [[-73.95924499945693, 40.670342666584396]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Bushwick - Aberdeen",
    coordinates: [[-73.90526176305106, 40.68286062551184]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE]],
    name: "Gun Hill Rd",
    coordinates: [[-73.84638400151765, 40.86952599962676]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "E 180th St",
    coordinates: [[-73.87334609510884, 40.8418630412186]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "Dyckman St",
    coordinates: [[-73.92553600006474, 40.86053100138796]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "125th St",
    coordinates: [[-73.95837200097044, 40.815580999978934]],
  },
  {
    lines: [
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.TWO],
    ],
    name: "149th St - Grand Concourse",
    coordinates: [
      [-73.92672247438611, 40.81833014409742],
      [-73.9273847542618, 40.81830344372315],
    ],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "3rd Ave - 149th St",
    coordinates: [[-73.91779152760981, 40.816029252510006]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "167th St",
    coordinates: [[-73.92139999784426, 40.83553699933672]],
  },
  {
    lines: [mtaLines[MtaLine.SIX]],
    name: "Brook Ave",
    coordinates: [[-73.91923999909432, 40.80756599987699]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN]],
    name: "33rd St",
    coordinates: [[-73.93099699953838, 40.74458699983993]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN]],
    name: "40th St",
    coordinates: [[-73.9240159984882, 40.74378100149132]],
  },
  {
    lines: [
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
    ],
    name: "145th St",
    coordinates: [[-73.94408792823116, 40.824766360871905]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "155th St",
    coordinates: [[-73.93820899811622, 40.8301349999812]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D], mtaLines[MtaLine.FOUR]],
    name: "161st St - Yankee Stadium",
    coordinates: [
      [-73.92565099775477, 40.827904998845845],
      [-73.92569199505733, 40.82823032742169],
    ],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Utica Ave",
    coordinates: [[-73.93072899914027, 40.67936399950546]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "Steinway St",
    coordinates: [[-73.9205264716827, 40.75698735912575]],
  },
  {
    lines: [mtaLines[MtaLine.J]],
    name: "Kosciuszko St",
    coordinates: [[-73.92850899927413, 40.69317200129202]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Gates Ave",
    coordinates: [[-73.92215600150752, 40.689583999013905]],
  },
  {
    lines: [mtaLines[MtaLine.M]],
    name: "Central Ave",
    coordinates: [[-73.92724299902838, 40.69787300011831]],
  },
  {
    lines: [mtaLines[MtaLine.M]],
    name: "Knickerbocker Ave",
    coordinates: [[-73.91972000188625, 40.69866000123805]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.W]],
    name: "30th Ave",
    coordinates: [[-73.9214790001739, 40.76677866673298]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Jefferson St",
    coordinates: [[-73.9229130000312, 40.706606665988716]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "Morgan Ave",
    coordinates: [[-73.93314700024209, 40.70615166680729]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.M], mtaLines[MtaLine.R]],
    name: "Queens Plz",
    coordinates: [[-73.93713823965695, 40.74891771986323]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "18th Ave",
    coordinates: [[-73.97697099965796, 40.62975466638584]],
  },
  {
    lines: [mtaLines[MtaLine.R]],
    name: "77th St",
    coordinates: [[-74.0255099996266, 40.629741666886915]],
  },
  {
    lines: [mtaLines[MtaLine.R]],
    name: "Bay Ridge Ave",
    coordinates: [[-74.02337699950728, 40.63496666682377]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "50th St",
    coordinates: [[-73.9946587805514, 40.636260890961395]],
  },
  {
    lines: [mtaLines[MtaLine.N]],
    name: "Ft Hamilton Pkwy",
    coordinates: [[-74.00535100046275, 40.63138566722445]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "25th Ave",
    coordinates: [[-73.98682900011477, 40.59770366695856]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "Bay Pky",
    coordinates: [[-73.9936762000529, 40.601950461572315]],
  },
  {
    lines: [mtaLines[MtaLine.N]],
    name: "20th Ave",
    coordinates: [[-73.98452199846113, 40.617108999866005]],
  },
  {
    lines: [mtaLines[MtaLine.N]],
    name: "18th Ave",
    coordinates: [[-73.99045399865993, 40.620686997680025]],
  },
  {
    lines: [mtaLines[MtaLine.R]],
    name: "Bay Ridge - 95th St",
    coordinates: [[-74.03087600085765, 40.61662166725951]],
  },
  {
    lines: [mtaLines[MtaLine.R]],
    name: "86th St",
    coordinates: [[-74.0283979999864, 40.62268666715025]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "79th St",
    coordinates: [[-74.00058287431507, 40.61315892569516]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "71st St",
    coordinates: [[-73.99884094850685, 40.61925870977273]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "20th Ave",
    coordinates: [[-73.99817432157568, 40.60467699816932]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "18th Ave",
    coordinates: [[-74.00159259239406, 40.60773573171741]],
  },
  {
    lines: [mtaLines[MtaLine.D], mtaLines[MtaLine.N]],
    name: "62nd St/New Utrecht Ave",
    coordinates: [
      [-73.99685724994863, 40.626224462922195],
      [-73.99635300025969, 40.62484166725887],
    ],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Ave U",
    coordinates: [[-73.97337641974885, 40.59592482551748]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Kings Hwy",
    coordinates: [[-73.9723553085244, 40.603258405128265]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.Q]],
    name: "Brighton Beach",
    coordinates: [[-73.96135378598797, 40.577710196642435]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.Q]],
    name: "Sheepshead Bay",
    coordinates: [[-73.95405791257907, 40.58654754707536]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "Ave U",
    coordinates: [[-73.95581122316301, 40.59930895095475]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.Q]],
    name: "Kings Hwy",
    coordinates: [[-73.95760873538083, 40.608638645396006]],
  },
  {
    lines: [mtaLines[MtaLine.N]],
    name: "Ave U",
    coordinates: [[-73.97908400099428, 40.597235999920436]],
  },
  {
    lines: [mtaLines[MtaLine.N]],
    name: "Kings Hwy",
    coordinates: [[-73.98037300229343, 40.60405899980493]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Neptune Ave",
    coordinates: [[-73.97459272818807, 40.580738758491464]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Ave X",
    coordinates: [[-73.97426599968905, 40.589449666625285]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "Bay 50th St",
    coordinates: [[-73.98376500045946, 40.58884066651933]],
  },
  {
    lines: [mtaLines[MtaLine.N]],
    name: "Gravesend - 86th St",
    coordinates: [[-73.97818899936274, 40.59246500088859]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Ave P",
    coordinates: [[-73.97300281528751, 40.608842808949916]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Ave N",
    coordinates: [[-73.97404850873143, 40.61435671190883]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Bay Pky",
    coordinates: [[-73.9752569782215, 40.62073162316788]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "Ave M",
    coordinates: [[-73.9592431052215, 40.617397744443736]],
  },
  {
    lines: [mtaLines[MtaLine.N]],
    name: "Bay Pky",
    coordinates: [[-73.98178001069293, 40.61145578989005]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Ave I",
    coordinates: [[-73.97606933170925, 40.62501744019143]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "Ave J",
    coordinates: [[-73.96069316246925, 40.625022819915166]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "Ave H",
    coordinates: [[-73.96151793942495, 40.62920837758969]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "Neck Rd",
    coordinates: [[-73.95507827493762, 40.59532169111695]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "21st St - Queensbridge",
    coordinates: [[-73.94193761457447, 40.75373927087553]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.E]],
    name: "50th St",
    coordinates: [[-73.98598400026407, 40.76245599925997]],
  },
  {
    lines: [mtaLines[MtaLine.E], mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "7th Ave",
    coordinates: [[-73.98169782344476, 40.76297015245628]],
  },
  {
    lines: [
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.M],
    ],
    name: "47th-50th Sts - Rockefeller Ctr",
    coordinates: [[-73.98133100227702, 40.75864100159815]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "57th St",
    coordinates: [[-73.97736800085171, 40.76408500081713]],
  },
  {
    lines: [mtaLines[MtaLine.F], mtaLines[MtaLine.Q]],
    name: "Lexington Ave - 63rd St",
    coordinates: [[-73.96608964413245, 40.76461809442373]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Roosevelt Island - Main St",
    coordinates: [[-73.95323499978866, 40.75917199967108]],
  },
  {
    lines: [
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "49th St",
    coordinates: [[-73.98420956591096, 40.759801973870694]],
  },
  {
    lines: [
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "57th St",
    coordinates: [[-73.98072973372128, 40.76456552501829]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.R], mtaLines[MtaLine.W]],
    name: "5th Ave - 59th St",
    coordinates: [[-73.97334700047045, 40.764810999755284]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "Lexington Ave - 59th St",
    coordinates: [
      [-73.96737501711436, 40.762708855394564],
      [-73.9679670004732, 40.762526000304575],
    ],
  },
  {
    lines: [
      mtaLines[MtaLine.ONE],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
    ],
    name: "34th St - Penn Station",
    coordinates: [[-73.99105699913983, 40.75037300003949]],
  },
  {
    lines: [
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.J],
      mtaLines[MtaLine.Z],
    ],
    name: "Fulton St",
    coordinates: [
      [-74.00657099970202, 40.70941599925865],
      [-74.00762309323994, 40.71016216530185],
      [-74.00793800110387, 40.71002266658424],
      [-74.00950899856461, 40.710367998822136],
    ],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "Myrtle-Willoughby Aves",
    coordinates: [[-73.94906699890156, 40.69461899903765]],
  },
  {
    lines: [mtaLines[MtaLine.G]],
    name: "Flushing Ave",
    coordinates: [[-73.9502340010257, 40.70037666622154]],
  },
  {
    lines: [mtaLines[MtaLine.F], mtaLines[MtaLine.M]],
    name: "23rd St",
    coordinates: [[-73.99276500471389, 40.742954317826005]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.G]],
    name: "Hoyt - Schermerhorn Sts",
    coordinates: [[-73.98503624034139, 40.68840847580642]],
  },
  {
    lines: [
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.R],
    ],
    name: "Jay St - MetroTech",
    coordinates: [
      [-73.98721815267317, 40.692470636847084],
      [-73.98605667854612, 40.69225539645323],
    ],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "East Broadway",
    coordinates: [[-73.99017700122197, 40.713855001020406]],
  },
  {
    lines: [
      mtaLines[MtaLine.J],
      mtaLines[MtaLine.Z],
      mtaLines[MtaLine.M],
      mtaLines[MtaLine.F],
    ],
    name: "Delancey St - Essex St",
    coordinates: [
      [-73.98740940202974, 40.71830605618619],
      [-73.98807806807719, 40.71868074219453],
    ],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "Lower East Side - 2nd Ave",
    coordinates: [[-73.98993800003434, 40.72340166574911]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.M]],
    name: "Flushing Ave",
    coordinates: [[-73.94137734838365, 40.70040440298112]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z], mtaLines[MtaLine.M]],
    name: "Myrtle Ave",
    coordinates: [[-73.9356230012996, 40.6971950005145]],
  },
  {
    lines: [mtaLines[MtaLine.G], mtaLines[MtaLine.F], mtaLines[MtaLine.R]],
    name: "4th Av - 9th St",
    coordinates: [
      [-73.98977899938897, 40.67027166728493],
      [-73.98830199974512, 40.670846666842756],
    ],
  },
  {
    lines: [mtaLines[MtaLine.G], mtaLines[MtaLine.F]],
    name: "Smith - 9th Sts",
    coordinates: [[-73.99589172790934, 40.67364106090412]],
  },
  {
    lines: [mtaLines[MtaLine.G], mtaLines[MtaLine.F]],
    name: "Bergen St",
    coordinates: [[-73.99075649573565, 40.68611054725977]],
  },
  {
    lines: [
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "23rd St",
    coordinates: [[-73.98934400102907, 40.74130266729]],
  },
  {
    lines: [mtaLines[MtaLine.D], mtaLines[MtaLine.N], mtaLines[MtaLine.R]],
    name: "Prospect Ave",
    coordinates: [[-73.99287200067424, 40.66541366712979]],
  },
  {
    lines: [mtaLines[MtaLine.L]],
    name: "3rd Ave",
    coordinates: [[-73.98575000112093, 40.73269099971662]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Liberty Ave",
    coordinates: [[-73.89654800103929, 40.67454199987086]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.R]],
    name: "59th St",
    coordinates: [[-74.01788099953987, 40.6413616662838]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.R]],
    name: "45th St",
    coordinates: [[-74.01000600074939, 40.648938666612814]],
  },
  {
    lines: [mtaLines[MtaLine.D], mtaLines[MtaLine.N], mtaLines[MtaLine.R]],
    name: "36th St",
    coordinates: [[-74.00354899951809, 40.65514366633887]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "9th Ave",
    coordinates: [[-73.99444874451204, 40.64648407726636]],
  },
  {
    lines: [mtaLines[MtaLine.N], mtaLines[MtaLine.R]],
    name: "53rd St",
    coordinates: [[-74.01403399986317, 40.64506866735981]],
  },
  {
    lines: [mtaLines[MtaLine.D]],
    name: "Ft Hamilton Pkwy",
    coordinates: [[-73.9942022375285, 40.640912711444656]],
  },
  {
    lines: [mtaLines[MtaLine.D], mtaLines[MtaLine.N], mtaLines[MtaLine.R]],
    name: "25th St",
    coordinates: [[-73.99809099974297, 40.66039666692321]],
  },
  {
    lines: [mtaLines[MtaLine.G], mtaLines[MtaLine.F]],
    name: "Carroll St",
    coordinates: [[-73.99494697998841, 40.68027335170176]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.E]],
    name: "Spring St",
    coordinates: [[-74.00373899843763, 40.72622700129312]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "181st St",
    coordinates: [[-73.93796900205011, 40.851694999744616]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "190th St",
    coordinates: [[-73.93417999964333, 40.85902199892482]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.B]],
    name: "116th St",
    coordinates: [[-73.95479778057312, 40.80505813344211]],
  },
  {
    lines: [
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
    ],
    name: "125th St",
    coordinates: [[-73.95224799734774, 40.811071672994565]],
  },
  {
    lines: [
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "Prince St",
    coordinates: [[-73.99770200045987, 40.72432866597571]],
  },
  {
    lines: [
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "8th St - NYU",
    coordinates: [[-73.99250799849149, 40.73046499853991]],
  },
  {
    lines: [
      mtaLines[MtaLine.ONE],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
    ],
    name: "Chambers St",
    coordinates: [[-74.00926600170112, 40.71547800011327]],
  },
  {
    lines: [mtaLines[MtaLine.TWO], mtaLines[MtaLine.THREE]],
    name: "Hoyt St",
    coordinates: [[-73.98506379575646, 40.69054418535472]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "183rd St",
    coordinates: [[-73.90387900151532, 40.85840700040842]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "Fordham Rd",
    coordinates: [[-73.90103399921699, 40.86280299988937]],
  },
  {
    lines: [
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.E],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "Chambers St - World Trade Center/Park Pl/Cortlandt St",
    coordinates: [
      [-74.00974461517701, 40.71256392680817],
      [-74.00881099997359, 40.713050999077694],
      [-74.01113196473266, 40.7105129841524],
    ],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.E]],
    name: "Canal St - Holland Tunnel",
    coordinates: [[-74.0052290023424, 40.72082400007119]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "155th St",
    coordinates: [[-73.94151400082208, 40.83051799929251]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "163rd St - Amsterdam Av",
    coordinates: [[-73.93989200188344, 40.83601299923096]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
      mtaLines[MtaLine.J],
      mtaLines[MtaLine.Z],
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
      mtaLines[MtaLine.R],
      mtaLines[MtaLine.W],
    ],
    name: "Canal St",
    coordinates: [
      [-74.00019299927328, 40.71880300107709],
      [-73.99982638545937, 40.71817387697391],
      [-74.0018260000577, 40.71946500105898],
      [-74.00105471306033, 40.718814263587134],
    ],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.R], mtaLines[MtaLine.W]],
    name: "South Ferry/Whitehall St",
    coordinates: [
      [-74.01316895919258, 40.701730507574474],
      [-74.0130072374272, 40.703142373599135],
    ],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.FIVE]],
    name: "Bowling Green",
    coordinates: [[-74.01400799803432, 40.70491399928076]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.FIVE]],
    name: "Wall St",
    coordinates: [[-74.01186199860112, 40.70755700086603]],
  },
  {
    lines: [mtaLines[MtaLine.R], mtaLines[MtaLine.W]],
    name: "Rector St",
    coordinates: [[-74.01297456253795, 40.707744756294474]],
  },
  {
    lines: [mtaLines[MtaLine.M]],
    name: "Fresh Pond Rd",
    coordinates: [[-73.8958980017196, 40.70622599823048]],
  },
  {
    lines: [mtaLines[MtaLine.M]],
    name: "Middle Village - Metropolitan Ave",
    coordinates: [[-73.88957722978091, 40.711431305058255]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "Rector St",
    coordinates: [[-74.01378300119742, 40.707512999521775]],
  },
  {
    lines: [mtaLines[MtaLine.ONE]],
    name: "Cortlandt St",
    coordinates: [[-74.01218800112292, 40.7118350008202]],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Broad St",
    coordinates: [[-74.01105599991755, 40.706476001106005]],
  },
  {
    lines: [mtaLines[MtaLine.TWO], mtaLines[MtaLine.THREE]],
    name: "Wall St",
    coordinates: [[-74.00909999844257, 40.706820999753376]],
  },
  {
    lines: [mtaLines[MtaLine.A]],
    name: "Dyckman St",
    coordinates: [[-73.92727099960726, 40.865490998968916]],
  },
  {
    lines: [mtaLines[MtaLine.B], mtaLines[MtaLine.D]],
    name: "Grand St",
    coordinates: [[-73.99375299913589, 40.71826699954992]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.M],
    ],
    name: "Broadway - Lafayette St/Bleeker St",
    coordinates: [
      [-73.99620399876055, 40.725296998738045],
      [-73.99465900006331, 40.72591466682659],
    ],
  },
  {
    lines: [mtaLines[MtaLine.J], mtaLines[MtaLine.Z]],
    name: "Bowery",
    coordinates: [[-73.99380690654237, 40.720246883147254]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.E]],
    name: "23rd St",
    coordinates: [[-73.99804100117201, 40.74590599939995]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.E]],
    name: "34th St - Penn Station",
    coordinates: [[-73.99339099970578, 40.752287000775894]],
  },
  {
    lines: [
      mtaLines[MtaLine.SEVEN],
      mtaLines[MtaLine.E],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.M],
      mtaLines[MtaLine.R],
    ],
    name: "Jackson Hts - Roosevelt Av/74th St - Broadway",
    coordinates: [
      [-73.89129866519697, 40.74653969115889],
      [-73.8912051289911, 40.746867573829114],
    ],
  },
  {
    lines: [
      mtaLines[MtaLine.ONE],
      mtaLines[MtaLine.TWO],
      mtaLines[MtaLine.THREE],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.F_EXPRESS],
      mtaLines[MtaLine.M],
      mtaLines[MtaLine.L],
    ],
    name: "14th St/6th Ave",
    coordinates: [
      [-73.99620899921355, 40.73822799969515],
      [-74.00020100063497, 40.737825999728116],
      [-73.99775078874781, 40.73774146981052],
    ],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.B]],
    name: "135th St",
    coordinates: [[-73.94753480879213, 40.817905559212676]],
  },
  {
    lines: [
      mtaLines[MtaLine.A],
      mtaLines[MtaLine.C],
      mtaLines[MtaLine.E],
      mtaLines[MtaLine.L],
    ],
    name: "14th St/8th Ave",
    coordinates: [
      [-74.00168999937027, 40.740893000193296],
      [-74.00257800104762, 40.73977666638199],
    ],
  },
  {
    lines: [mtaLines[MtaLine.FOUR], mtaLines[MtaLine.THREE]],
    name: "Nostrand Ave",
    coordinates: [[-73.9504262489579, 40.66993815093054]],
  },
  {
    lines: [mtaLines[MtaLine.TWO], mtaLines[MtaLine.THREE]],
    name: "Clark St",
    coordinates: [[-73.99308599821961, 40.69746599996469]],
  },
  {
    lines: [mtaLines[MtaLine.C], mtaLines[MtaLine.S]],
    name: "Franklin Ave - Fulton St",
    coordinates: [
      [-73.95684800014614, 40.68137966658742],
      [-73.95582700110425, 40.68059566598263],
    ],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Clinton - Washington Aves",
    coordinates: [[-73.96583799857275, 40.68326299912644]],
  },
  {
    lines: [mtaLines[MtaLine.M]],
    name: "Forest Ave",
    coordinates: [[-73.90307500005954, 40.70441200087814]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "110th St",
    coordinates: [[-73.94424999687163, 40.795020000113105]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "86th St",
    coordinates: [[-73.95558899985132, 40.77949199820952]],
  },
  {
    lines: [mtaLines[MtaLine.F]],
    name: "York St",
    coordinates: [[-73.98688499993673, 40.699742667691574]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "High St",
    coordinates: [[-73.99053100065458, 40.69933699977884]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C]],
    name: "Lafayette Ave",
    coordinates: [[-73.97394599849406, 40.68611300020567]],
  },
  {
    lines: [mtaLines[MtaLine.FIVE], mtaLines[MtaLine.TWO]],
    name: "President St",
    coordinates: [[-73.95058920022207, 40.667883603536815]],
  },
  {
    lines: [mtaLines[MtaLine.FOUR]],
    name: "Woodlawn",
    coordinates: [[-73.87875099990931, 40.886037000253324]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "103rd St",
    coordinates: [[-73.94747800152219, 40.79060000008452]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.C], mtaLines[MtaLine.S]],
    name: "Euclid Ave",
    coordinates: [[-73.87210600099675, 40.675376998239365]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "88th St",
    coordinates: [[-73.85147000026086, 40.67984300135503]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "Cortelyou Rd",
    coordinates: [[-73.96379005505493, 40.6409401651401]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "116th St",
    coordinates: [[-73.9416169983714, 40.7986290002001]],
  },
  {
    lines: [mtaLines[MtaLine.SIX], mtaLines[MtaLine.SIX_EXPRESS]],
    name: "Parkchester",
    coordinates: [[-73.86081600108396, 40.83322599927859]],
  },
  {
    lines: [mtaLines[MtaLine.ONE], mtaLines[MtaLine.TWO]],
    name: "Franklin St",
    coordinates: [[-74.00688600277107, 40.719318001302135]],
  },
  {
    lines: [mtaLines[MtaLine.A], mtaLines[MtaLine.S]],
    name: "80th St",
    coordinates: [[-73.85899200206335, 40.67937100115432]],
  },
  {
    lines: [
      mtaLines[MtaLine.SEVEN],
      mtaLines[MtaLine.SEVEN_EXPRESS],
      mtaLines[MtaLine.B],
      mtaLines[MtaLine.D],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.F_EXPRESS],
      mtaLines[MtaLine.M],
    ],
    name: "42nd St - Bryant Park/5th Ave",
    coordinates: [
      [-73.98196299856706, 40.75382100064824],
      [-73.98459099904711, 40.754184001312545],
    ],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "Spring St",
    coordinates: [[-73.99714100006673, 40.72230099999366]],
  },
  {
    lines: [
      mtaLines[MtaLine.FOUR],
      mtaLines[MtaLine.FIVE],
      mtaLines[MtaLine.SIX],
      mtaLines[MtaLine.SIX_EXPRESS],
    ],
    name: "125th St",
    coordinates: [[-73.93759400055725, 40.804138000587244]],
  },
  {
    lines: [
      mtaLines[MtaLine.D],
      mtaLines[MtaLine.F],
      mtaLines[MtaLine.N],
      mtaLines[MtaLine.Q],
    ],
    name: "Coney Island - Stillwell Av",
    coordinates: [[-73.9812359981396, 40.57728100006751]],
  },
  {
    lines: [mtaLines[MtaLine.SEVEN], mtaLines[MtaLine.SEVEN_EXPRESS]],
    name: "34th St - Hudson Yards",
    coordinates: [[-74.00219709442206, 40.75544635961596]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "72nd St",
    coordinates: [[-73.95836178682246, 40.76880251014895]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "86th St",
    coordinates: [[-73.95177090964917, 40.77786104333163]],
  },
  {
    lines: [mtaLines[MtaLine.Q]],
    name: "96th St",
    coordinates: [[-73.9470660219183, 40.784236650177654]],
  },
];

const MTA_OPERATOR_CONFIG: OperatorConfiguration<MtaTrunkLine, MtaLine> = {
  stations: mtaStations,
  lines: Object.values(mtaLines),
  linesbyTrunkLine: mtaLinesByTrunkLine,
};

export default MTA_OPERATOR_CONFIG;