import React from 'react';
import { projectsData, ProjectType } from './projectsData';
import styles from './projects.module.css'

type Props = {
    project: ProjectType,
    children?: React.ReactNode
}

const Tag = ({ tag, color }: { tag: string, color?: string }) => {
    return <small className={[styles.tag, color && color.split(' ').map(color => styles[color]).join(' ')].join(' ')}>{tag}</small>
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <div className={[styles.card, styles[project.background]].join(' ')}>
            <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                    <h2>{`0${project.id}`}</h2>
                    <div className={styles.links}>
                        {project.links.map((link, i) => <a href={link.url} target="_blank" rel="noreferrer noopener" key={i}><Tag tag={link.name} /></a>)}
                    </div>
                </div>
                <h3>{project.title}</h3>
                <div className={styles.tags}>
                    {project.tags.frontend.map((tag, i) => <Tag tag={tag} key={i} color='tag-front' />)}
                    {project.tags.backend?.map((tag, i) => <Tag tag={tag} key={i} color='tag-back' />)}
                    {project.tags.both?.map((tag, i) => <Tag tag={tag} key={i} color='tag-back tag-front' />)}
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section className={styles.fullscreen}>
            <div className={styles.gallery}>{projectsData.sort((a, b) => a.id > b.id ? 1 : -1).map(prj => <ProjectCard project={prj} key={prj.id} />)}</div>
        </section>
    );
};

export default Projects;