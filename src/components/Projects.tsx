import React from 'react';
import { projectsData, ProjectType } from './projectsData';
import styles from './projects.module.css'

type Props = {
    project: ProjectType,
    children?: React.ReactNode
}

const Tag = ({ tag }: { tag: string }) => {
    return <small className={styles.tag}>{tag}</small>
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <div className={[styles.card, styles[project.background]].join(' ')}>
            <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                    <h2>{`0${project.id}`}</h2>
                    <div className={styles.tags}>
                        {project.links.map((link, i) => <a href={link.url} target="_blank" rel="noreferrer noopener" key={i}><Tag tag={link.name}/></a>)}
                    </div>
                </div>
                <h3>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.tags}>{project.tags.map((tag, i) => <Tag tag={tag} key={i} />)}</div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section className={styles.fullscreen}>
            <div className={styles.gallery}>{projectsData.map(prj => <ProjectCard project={prj} key={prj.id} />)}</div>
        </section>
    );
};

export default Projects;