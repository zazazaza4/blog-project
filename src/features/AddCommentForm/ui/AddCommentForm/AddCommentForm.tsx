import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { sendComment } from '../../model/services/sendComment/sendComment';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentForm';

import cls from './AddCommentForm.module.scss';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

interface AddCommentFormProps {
  className?: string;
  onSendComment: () => void;
}

const AddCommentForm: FC<AddCommentFormProps> = memo((
  {
    className,
    onSendComment,
  }: AddCommentFormProps,
) => {
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          value={text}
          className={cls.input}
          placeholder={t('comments.input')}
          onChange={onCommentTextChange}
        />
        <Button
          onClick={onSendHandler}
          theme={ButtonTheme.OUTLINE}
        >
          {t('comments.button')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
