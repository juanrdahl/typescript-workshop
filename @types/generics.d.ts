interface CommonJSON {
  [key: string]: any;
}

type TUpdate<Type> = {
  [Property in keyof Type]?: Type[Property];
} & { id: string };

type TWhere<Type> = {
  [Property in keyof Type]?: Type[Property];
};
