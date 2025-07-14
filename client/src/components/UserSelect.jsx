import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, addUser } from "../api";
import { useState } from "react";

export default function UserSelect({ current, onChange }) {
const qc = useQueryClient();
const [name, setName] = useState("");

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const m = useMutation({
    mutationFn: () => addUser(name),
    onSuccess: () => {
      qc.invalidateQueries(["users"]);
      setName("");
    },
    onError: (err) => {
      alert("❌ Failed to add user: " + (err?.response?.data?.error || err.message));
    },
  });

  return (
    <div className="space-y-2">
      <select
        value={current}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded border"
      >
        <option value="">Select user…</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add user"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={() => m.mutate()}
          disabled={!name || m.isPending}
          className="px-3 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
        >
          {m.isPending ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
}
