export default function ResumeButton({ resume } : { resume: string }) {
    return (
        <a className='resume w-100' href={resume} target='_blank'><i className="fa-solid fa-file-arrow-down me-2"></i> Download Resume</a>
    );
}