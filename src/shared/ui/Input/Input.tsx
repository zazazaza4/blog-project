import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className, placeholder, value, onChange, autofocus, type = 'text', ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: SyntheticEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    setCaretPosition(inputElement.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChangeHandle}
          onSelect={onSelect}
          className={cls.input}
          ref={ref}
          {...otherProps}
        />
        {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  );
});
