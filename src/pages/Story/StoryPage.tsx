import { useNavigate, useParams } from "react-router-dom";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarsIcon from "@mui/icons-material/Stars";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Comment from "@src/components/Comment/Comment";
import LabelWithIcon from "@src/components/LabelWithIcon/LabelWithIcon";
import Link from "@src/components/Link/Link";
import RefreshButton from "@src/components/RefreshButton/RefreshButton";
import ScrollLoader from "@src/components/ScrollLoader/ScrollLoader";
import useStoryData from "@src/hooks/queries/useStoryData";
import StoryCardSkeleton from "@src/pages/Story/Skeleton";
import { formatUnixDateWithTime } from "@src/utils/functions/format/date";

import S from "./StoryPage.styles";

const StoryPage = () => {
  const { newsId } = useParams();

  const {
    story,
    comments,
    refetchComments,
    error,
    isLoading,
    isFetchingNextPage,
    observerRef,
    hasNextPage,
    commentsIsFetching
  } = useStoryData(Number(newsId));

  if (error) return <Typography>ERROR</Typography>;

  return (
    <Box>
      {isLoading ? (
        <StoryCardSkeleton />
      ) : (
        story && (
          <>
            <S.Title>
              <Typography variant="h4">{story.title}</Typography>
              <Link to="/">
                <Button>Back to News</Button>
              </Link>
            </S.Title>

            <S.Info>
              <LabelWithIcon
                text={story.by}
                icon={<AccountCircleIcon color="primary" />}
              />
              <LabelWithIcon
                text={story.score}
                icon={<StarsIcon color="warning" />}
              />
              <LabelWithIcon
                text={formatUnixDateWithTime(story.time * 1000)}
                icon={<AccessTimeFilledIcon color="disabled" />}
              />
            </S.Info>

            <Link to={story.url} target="_blank">
              <S.Url variant="outlined">
                <Typography>{story.url}</Typography>
              </S.Url>
            </Link>
            {/* <Button onClick={() => refetchComments()}>refetchComments</Button> */}

            <S.Title>
              <Typography variant="h5">
                Comments ({story.descendants})
              </Typography>
              {comments && (
                <RefreshButton
                  isFetching={commentsIsFetching}
                  clickHandler={refetchComments}
                />
              )}
            </S.Title>
            {comments ? (
              <Box>
                {comments.pages.map(page =>
                  page.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                  ))
                )}
              </Box>
            ) : (
              <Typography variant="body2">No Comments</Typography>
            )}
            {hasNextPage && (
              <ScrollLoader
                isFetchingNextPage={isFetchingNextPage}
                ref={observerRef as any}
              />
            )}
          </>
        )
      )}
    </Box>
  );
};

export default StoryPage;
