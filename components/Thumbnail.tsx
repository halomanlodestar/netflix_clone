/** @format */

import Image from "next/image";
import { Movie } from "../typings";

/** @format */
interface Props {
	// movie: Movie | DocumnetData;
	movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
	return (
		<div className="flex relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
			<Image
				alt=""
				src={`https://image.tmdb.org/t/p/w500${
					movie.backdrop_path || movie.poster_path
				}`}
				className="rounded-sm object-cover md:rounded flex"
				layout="fill"
			/>
			{/* <span className="absolute p-2 w-full bottom-0 bg-gradient-to-t from-black text-white text-sm font-semibold flex z-10">
				{movie.title}
			</span> */}
		</div>
	);
};

export default Thumbnail;
