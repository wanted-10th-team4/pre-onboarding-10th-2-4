export interface LabelForInputProps {
  labelFor: string;
  labelText: string;
}

export interface SearchInputInputProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  isInputTextFocus: boolean;
  setIsInputTextFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SetCacheProps {
  key: string;
  value: object;
  expireTime: number;
}
