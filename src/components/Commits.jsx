export default function Commits({ commits }){

    const generateTime = (date) => {
        const now = new Date();
        const commitDate = new Date(date);

        const diffMs = now - commitDate;
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

        if (diffMinutes < 60) return `${diffMinutes} min ago`;  
        if(diffHours > 24) return `${diffDays} days ago`
        return `${diffHours} hr ago`;

    };

    return(
        <div className="commits-container my-2">
            <div className="commits-header d-flex align-items-center justify-content-between mb-2">
                <h6 className="fs-5 p-0">Recent Commits</h6>
                <a href="https://github.com/Apridonidze/portfolio-app/commits">View all commits <i className="fa-solid fa-angle-right"></i></a>
            </div>
            
            <div className="commits-main row gap-2 p-1 mt-2 px-2">
                {commits?.map((commit, commitId) => 
                    <div className="commit-container d-flex justify-content-between align-items-center" key={commitId} onClick={() => window.open(commit.url)}>
                        <div className="commit-start d-flex flex-column align-items-start ">
                            <h6 className="m-0 " style={{maxWidth : '80%'}}>{commit.message.length > 60 ? `${commit.message.slice(0, 60)}...` : commit.message}</h6>
                            <span className="small mt-1">{commit.url.split('/')[3]}/{commit.url.split('/')[4]}</span>
                        </div>

                        <div className="commit-end d-flex gap-2">
                            <span className="small">{generateTime(commit.date)}</span> <br />
                            <a href={commit.url} target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};