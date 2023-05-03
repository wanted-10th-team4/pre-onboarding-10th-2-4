import { GetSearchResultsResponse, SearchResult } from './data';

export interface LabelForInputProps {
  labelFor: string;
  labelText: string;
}

export interface SearchInputInputProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  isInputTextFocus: boolean;
  setIsInputTextFocus: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  maxIndex: number;
}

export interface SetCacheProps {
  key: string;
  value: object;
  expireTime: number;
}

export interface RecommendationProps {
  recommendationList: GetSearchResultsResponse;
  inputText: string;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface RecommendationItemProps {
  recommendationItem: SearchResult;
  inputText: string;
  isSelected: boolean;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}
