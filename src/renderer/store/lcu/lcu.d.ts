declare interface LCUState {
  credentials?: Credentials;
  summoner?: number;
  champions: Champions;
}

declare interface ChampSelectPacket {
  myTeam: {
    championId: number;
    summonerId: number;
  }[];
  timer: {
    phase: string;
  };
}

declare interface Champion {
  id: number;
  name: string;
  squarePortraitPath: string;
  ownership: {
    owned: boolean;
  };
}

declare type Champions = Champion[];
