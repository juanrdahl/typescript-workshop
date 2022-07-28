interface CommonJSON {
  [key: string]: any;
}

type TWhere<Type> = {
  [Property in keyof Type]?: Type[Property];
};

type TUpdate<Type> = {
  [Property in keyof Type]?: Type[Property];
} & { id: string };
