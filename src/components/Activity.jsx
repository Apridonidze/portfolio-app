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
        <div className="activity-container">
            <Commits commits={commits}/>
            <div className="d-flex flex-column">
                <h6 >GitHub Activity</h6>
                <GitHubCalendar username='Apridonidze' style={{backgroundColor : '#121c2a' , padding :'1rem' , borderRadius : '10px'}}/>
            </div>
        </div>
    );
};