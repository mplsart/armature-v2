import React from 'react';
interface LoadMoreButtonProps {
    displayLabel: string;
    hasMore: boolean;
    loadMoreClickHandler: () => void;
}
declare const LoadMoreButton: React.FunctionComponent<LoadMoreButtonProps>;
export default LoadMoreButton;
