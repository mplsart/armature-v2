import React from 'react';
import SmallActionButton from './SmallActionButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  moreWrap: {
    padding: theme.gutterSize,
    textAlign: 'center',
  },
}));

interface LoadMoreButtonProps {
  displayLabel: string;
  hasMore: boolean;
  loadMoreClickHandler: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = (props) => {
  let { hasMore, loadMoreClickHandler, displayLabel } = props;
  let classes = useStyles();

  if (!hasMore) {
    return <></>;
  }

  return (
    <div className={classes.moreWrap}>
      <SmallActionButton onClick={loadMoreClickHandler}>{displayLabel}</SmallActionButton>
    </div>
  );
};
export default LoadMoreButton;
