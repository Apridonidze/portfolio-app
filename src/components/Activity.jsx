import axios from 'axios'
import { GitHubCalendar } from 'react-github-calendar'

import Commits from "./Commits";
import { useEffect, useState } from "react";

export default function Activity(){

    const [commits, setCommits] = useState([]);

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await axios.get("https://api.github.com/repos/Apridonidze/Apridonidze/commits?per_page=3")
                const data = response.data;

                const commits = data.map(c => ({
                    id : c.author.id,
                    message: c.commit.message,
                    url: c.html_url,
                    date: c.commit.author.date
                }));

                setCommits(commits);

            }catch(err){
                setCommits([]);
            };
        };

        fetchData();
    },[]);

    return(
        <div className="activity-container mt-5">
            <Commits commits={commits}/>

            <div className="github-calendar-container d-flex flex-column mt-4">
                <div className="acitvity-header d-flex align-items-center justify-content-between">
                    <h6>GitHub Contributions</h6>
                    <a href="https://github.com/Apridonidze">View full profile <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <GitHubCalendar username='Apridonidze' style={{backgroundColor : '#121c2a' , padding :'1rem' , borderRadius : '10px'}}/>
            </div>
        </div>
    );
};