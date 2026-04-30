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
        <div className="commits-container">
            <h6>Recent Commits</h6>
            {commits?.map((commit, commitId) => 
                <div className="commit-container" key={commitId}>
                    <div className="commit-start">
                        <span>{commit.message}</span>
                        <span>{commit.url.split('/')[3]}/{commit.url.split('/')[4]}</span>
                    </div>

                    <div className="commit-end">
                        <span>{generateTime(commit.date)}</span> <br />
                        <span>{commit.id}</span>
                    </div>
                </div>
            )}
        </div>
    );
};