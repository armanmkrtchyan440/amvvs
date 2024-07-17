import { IBlog } from "@/api/api";
import { FC, useMemo } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactPlayer from "react-player";

export const BlogItem: FC<IBlog> = ({ title, video, thumb }) => {
  const videoUrl = useMemo(
    () => import.meta.env.VITE_BASE_URL + video?.data?.attributes?.url,
    [video]
  );

  const thumbUrl = useMemo(
    () => import.meta.env.VITE_BASE_URL + thumb?.data?.attributes?.url,
    [thumb]
  );

  return (
    <Dialog>
      <DialogTrigger>
        <article
          className="flex flex-col rounded-3xl shadow-lg transition-shadow hover:shadow-xl cursor-pointer"
          tabIndex={1}
        >
          <div className="relative aspect-square h-[400px] overflow-hidden rounded-t-3xl">
            <img
              className="h-full w-full object-cover"
              src={thumbUrl}
              alt={title}
            />
          </div>
          <div className="rounded-b-3xl bg-white p-6">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </article>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer
          url={videoUrl}
          playing
          controls
          width="100%"
          height={"100%"}
        />
      </DialogContent>
    </Dialog>
  );
};
