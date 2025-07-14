import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { claim } from "../api";
import UserSelect from "../components/UserSelect";
import LeaderboardTable from "../components/LeaderboardTable";

export default function Leaderboard() {
const qc = useQueryClient();
const [userId, setUserId] = useState("");
const mutate = useMutation({
    mutationFn: () => claim(userId),
    onSuccess: () => qc.invalidateQueries(["leaderboard"]),
});

return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-4">
    <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 flex items-center justify-center gap-2">
        <span role="img" aria-label="trophy">🏆</span> Live Leaderboard
        </h1>

        <UserSelect current={userId} onChange={setUserId} />

        <button
        disabled={!userId || mutate.isPending}
        onClick={() => mutate.mutate()}
        className="w-full py-3 bg-emerald-600 text-white font-semibold text-lg rounded-lg transition hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
        {mutate.isPending ? "Claiming…" : "Claim Random Points"}
        </button>

        <LeaderboardTable />
    </div>
    </div>
);
}
