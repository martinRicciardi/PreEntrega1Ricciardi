import '../styles/Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    return ( 
        <div className="footer">
            <p>Martin Ricciardi - 2023</p>
            <div>
                <a href="https://github.com/martinRicciardi"><GitHubIcon fontSize='large'/></a>
                <a href="https://www.linkedin.com/in/martin-ricciardi-19061123b/"><LinkedInIcon fontSize='large'/></a>
            </div>
        </div>
    )
}