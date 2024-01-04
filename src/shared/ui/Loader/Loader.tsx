import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import './Loader.scss';

interface LoaderProps {
  className?: string

}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames('loadingio-spinner-spin-8t05lavdf83', {}, [className])}>
    <div className="ldio-c25sf961sw6">
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
    </div>
  </div>
);
