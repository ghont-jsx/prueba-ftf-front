import React, { useState, useEffect } from "react";

interface Commit {
    sha: string;
    commit: {
        author: {
            name: string;
            date: string;
        };
        message: string;
    };
}

function CommitHistory() {

    const [commits, setCommits] = useState<Commit[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>(''); // State for input

    useEffect(() => {
        fetch(`/api/commits`)
            .then(response => {
                
                return response.json();
            })
            .then(data => {
                
                setCommits(data);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {


        fetch(`/api/commits?search=${searchTerm}`)
            .then(response => response.json())
            .then(data => setCommits(data))
            .catch(error => console.log(error));
    }, [searchTerm]);



    const handleSearch = () => {
        // Fetch commits based on searchTerm
        fetch(`/api/commits?search=${searchTerm}`)
            .then(response => response.json())
            .then(data => setCommits(data))
            .catch(error => console.log(error));
    };

    return (
        <div className="bg-gray-100 p-4 rounded shadow">
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Search commits..."
                    className="p-2 border rounded-l w-full"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-r"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <ul className="divide-y divide-gray-300">
                {commits.map(commit => (
                    <li key={commit.sha} className="py-3">
                        <div className="flex items-center">
                            <div className="w-12 h-12 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center">

                            </div>
                            <div className="ml-4">
                                <p className="text-lg font-semibold text-blue-600">{commit.commit.author.name}</p>
                                <p className="text-sm text-gray-500">{commit.commit.author.date}</p>
                                <p className="text-gray-700">{commit.commit.message}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default CommitHistory;
