import {
  ChangeEvent, useMemo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?:SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string> ({
  className,
  label,
  options,
  value,
  onChange,
  readonly = false,
}: SelectProps<T>) => {
  const optionList = useMemo(() => options?.map((opt) => (
    <option
      className={cls.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {
        label && (
          <span className={cls.label}>
            {label}
            &gt;
          </span>
        )
      }
      <select
        className={cls.select}
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
};
