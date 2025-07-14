import { useQuery } from "@tanstack/react-query";
import { fetchLeaderboard } from "../api";
import {motion} from "framer-motion";


export default function LeaderboardTable(){
    const {data : board = [],isLoading}=useQuery({
        queryKey:["leaderboard"],
        queryFn:fetchLeaderboard,
        refetchInterval:2000,
    });
    if(isLoading) return "Loading...";

    return(
        <motion.table layout className="w-full border-collapse text-left">
            <thead>
                <tr className="bg-gray-100">
                    <th className="p-2">Rank</th><th>Name</th><th>Total</th>
                </tr>
            </thead>
            
            <tbody>
                {board.map(row=>(
                    <motion.tr key={row._id} layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="border-b">
                        <td className="p-2 font-semibold">{row.rank}</td>
                        <td>{row.name}</td>
                        <td>{row.totalPoints}</td>
                    </motion.tr>
                ))}
            </tbody>
        </motion.table>
    );
}