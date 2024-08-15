export interface PropsProvider {
  children: React.ReactNode;
}

export interface ProductContexInterface {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>
}
