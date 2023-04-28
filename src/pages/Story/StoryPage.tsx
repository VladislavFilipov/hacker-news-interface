import { useState } from "react";
import { useParams } from "react-router-dom";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarsIcon from "@mui/icons-material/Stars";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

import Comment from "@src/components/Comment/Comment";
import LabelWithIcon from "@src/components/LabelWithIcon/LabelWithIcon";
import Link from "@src/components/Link/Link";
import LoadingWrap from "@src/components/LoadingWrap/LoadingWrap";
import RefreshButton from "@src/components/RefreshButton/RefreshButton";
import ScrollLoader from "@src/components/ScrollLoader/ScrollLoader";
import useStoryData from "@src/hooks/queries/useStoryData";
import useStorage from "@src/hooks/useStorage";
import StoryCardSkeleton from "@src/pages/Story/Skeleton";
import { formatUnixDateWithTime } from "@src/utils/functions/format/date";

import S from "./StoryPage.styles";

const StoryPage = () => {
  const { newsId } = useParams();
  const [loadOnlyChilds, setLoadOnlyChilds] = useStorage<string>(
    "loadOnlyChilds",
    ""
  );

  const { story, comments, observerRef } = useStoryData(Number(newsId));

  return (
    <Box>
      <LoadingWrap
        isLoading={story.isLoading}
        error={story.isError && new Error("Failed to load news item")}
        skeleton={<StoryCardSkeleton />}
        repeatHandler={story.refetch}
      >
        {story.data && (
          <>
            <S.Title>
              <Link to="/">
                <Button>Back to News</Button>
              </Link>
              <Typography variant="h4">{story.data.title}</Typography>
            </S.Title>

            <S.Info>
              <LabelWithIcon
                text={story.data.by}
                icon={<AccountCircleIcon color="primary" />}
              />
              <LabelWithIcon
                text={story.data.score}
                icon={<StarsIcon color="warning" />}
              />
              <LabelWithIcon
                text={formatUnixDateWithTime(story.data.time * 1000)}
                icon={<AccessTimeFilledIcon color="disabled" />}
              />
            </S.Info>

            {story.data.url && (
              <Link to={story.data.url} target="_blank">
                <S.Url variant="outlined">
                  <Typography>{story.data.url}</Typography>
                </S.Url>
              </Link>
            )}

            <S.Comments>
              <LoadingWrap
                isLoading={comments.isFetching}
                error={comments.isError && new Error("Failed to load comments")}
                repeatHandler={comments.refetch}
              >
                <S.CommentsTitle>
                  <Typography variant="h5">
                    Comments ({story.data.descendants})
                  </Typography>

                  {comments.data && (
                    <>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            size="small"
                            checked={!!loadOnlyChilds}
                            onChange={({ target }) => {
                              comments.refetch();
                              setLoadOnlyChilds(target.checked ? "1" : "");
                            }}
                            disabled={comments.isFetching}
                          />
                        }
                        label="Load only childs"
                      />
                      <RefreshButton
                        isFetching={comments.isFetching}
                        clickHandler={comments.refetch}
                      />
                    </>
                  )}
                </S.CommentsTitle>

                {comments.data ? (
                  <Box>
                    {comments.data.pages.map(page =>
                      page.map(comment => (
                        <Comment
                          key={comment.id}
                          comment={comment}
                          onlyChilds={!!loadOnlyChilds}
                        />
                      ))
                    )}
                  </Box>
                ) : (
                  <Typography variant="body2">No Comments</Typography>
                )}
                {comments.hasNextPage && (
                  <Box ref={observerRef}>
                    <ScrollLoader
                      isFetchingNextPage={comments.isFetchingNextPage}
                    />
                  </Box>
                )}
              </LoadingWrap>
            </S.Comments>
          </>
        )}
      </LoadingWrap>
    </Box>
  );
};

export default StoryPage;
