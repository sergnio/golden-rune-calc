type Rune = {
  soulsGiven: number;
  label: string;
} & OwnedRune;

type OwnedRune = {
  id: number;
};

type Optional<T> = T | null | undefined;
type Nullable<T> = T | null;
type Undefinable<T> = T | undefined;
