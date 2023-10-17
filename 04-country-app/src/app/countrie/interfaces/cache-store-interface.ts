import { Countrie } from "./countrie-interface";
import { Region } from "./region-type";

export interface CacheStore{
  byCapital: TextCountries;
  byCountrie: TextCountries;
  byRegion: RegionCountries;
}

interface TextCountries{
    text: string;
    countries: Countrie[];
}

interface RegionCountries{
  region: Region;
  countries: Countrie[];
}

