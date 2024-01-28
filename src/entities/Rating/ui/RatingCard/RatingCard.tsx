import {
  FC, memo, useCallback, useState,
} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?:number;
}

export const RatingCard: FC<RatingCardProps> = memo((
  props: RatingCardProps,
) => {
  const { t } = useTranslation();
  const {
    className,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    title,
    rate = 0,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectedStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack max gap="32">
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('feedback')}
      />
      <HStack justify="end" gap="16">
        <Button
          onClick={cancelHandle}
          theme={ButtonTheme.OUTLINE_RED}
        >
          {t('close')}
        </Button>
        <Button onClick={acceptHandle}>{t('send')}</Button>
      </HStack>
    </VStack>
  );

  return (
    <Card max className={classNames('', {}, [className])}>
      <VStack align="center" gap="8" max>
        <Text title={starsCount ? t('thanks') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectedStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} isLazy>
          {modalContent}
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} isLazy onClose={cancelHandle}>
          {modalContent}
        </Drawer>
      </MobileView>
    </Card>
  );
});
