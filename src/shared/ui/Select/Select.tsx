import {
  ChangeEvent, FC, memo, useMemo,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?:SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo(({
  className,
  label,
  options,
  value,
  onChange,
  readonly = true,
}: SelectProps) => {
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
    onChange?.(e.target.value);
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
});
