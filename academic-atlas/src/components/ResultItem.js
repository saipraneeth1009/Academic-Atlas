import React from 'react'
import '../styles/ResultItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export default function ResultItem(props) {
    const examPaper = props.examPaper;
    console.log(examPaper)
    const { author, academicYear, branch, course, pdfFile } = examPaper;
    const showOptions = () => {
        document.querySelector('.hidden-options').classList.toggle('show-options');
    }
    return (
        <div className="result-item-page">
            <div className="result-item-container">
                <div className="three-dots" title="more-actions">
                    <FontAwesomeIcon icon={faEllipsisVertical} className="result-ellipsis" onClick={showOptions} />
                </div>
                <div className="hidden-options">
                    <div>View</div>
                    <div>Download</div>
                </div>
                <span className="result-item-img">
                    <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" alt="result" />
                </span>
                <div className="result-ay result-item-detail">
                    <span className="result-item-label">Academic Year</span> &nbsp;
                    <span className="result-item-value">{academicYear}</span> <br />
                    <span className="result-item-label">Branch</span>   &nbsp;
                    <span className="result-item-value">{branch}</span> <br />
                    <span className="result-item-label">Course</span>  &nbsp;
                    <span className="result-item-value">{course}</span> <br />
                    <span className="result-item-label">Author</span> &nbsp;
                    <span className="result-item-value">{author}</span> <br />
                    <span className="result-item-label">PDF</span> &nbsp; 
                </div>
            </div>
        </div>
    )
}