import React, { useState } from 'react';
import ProjectsHero from './ProjectsHero';
import ProjectField from './ProjectField';
import FeaturedProject from './FeaturedProject';
import InterventionToProject from './InterventionToProject';
import ProjectScaleSelector from './ProjectScaleSelector';
import ProjectSystemMap from './ProjectSystemMap';
import ProjectLibrary from './ProjectLibrary';
import ProjectsClosingCTA from './ProjectsClosingCTA';
import ProjectDetailModal from './ProjectDetailModal';
import { PROJECTS_DATA } from '../../data/brandData';

export default function ProjectsExperience({
  theme = 'day',
  onOpenCalculator,
  onNavigate
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeScale, setActiveScale] = useState('neighbourhood');
  const [activeProjectIdForMap, setActiveProjectIdForMap] = useState('proj-solar-commons');
  const [modalProject, setModalProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal with specific project details
  const handleOpenProjectModal = (project) => {
    setModalProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Inspect project on system map and scroll to map section
  const handleInspectSystemMap = (project) => {
    setActiveProjectIdForMap(project.id);
    const mapSection = document.getElementById('system-map');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to project field from hero
  const handleExploreField = () => {
    const fieldSection = document.getElementById('project-field');
    if (fieldSection) {
      fieldSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to scale selector from hero
  const handleSelectScaleFromHero = (scaleId) => {
    setActiveScale(scaleId);
    const scaleSection = document.getElementById('scale-selector');
    if (scaleSection) {
      scaleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* 01: Hero Section */}
      <ProjectsHero
        theme={theme}
        activeScale={activeScale}
        onSelectScale={handleSelectScaleFromHero}
        onExploreField={handleExploreField}
      />

      {/* 02: Spatial Living Project Field */}
      <ProjectField
        theme={theme}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSelectProject={handleOpenProjectModal}
        onInspectSystemMap={handleInspectSystemMap}
      />

      {/* 03: Featured Project Deep Dive (The Solar Commons) */}
      <FeaturedProject
        theme={theme}
        onOpenReport={handleOpenProjectModal}
      />

      {/* 04: Narrative Bridge: Intervention to Project Emergence */}
      <InterventionToProject
        theme={theme}
      />

      {/* 05: Multi-Scalar Territories (Home -> Block -> Neighbourhood -> City) */}
      <ProjectScaleSelector
        theme={theme}
        activeScale={activeScale}
        onSelectScale={setActiveScale}
        onOpenReport={handleOpenProjectModal}
      />

      {/* 06: EcoNest Signature System Map Matrix */}
      <ProjectSystemMap
        theme={theme}
        activeProjectId={activeProjectIdForMap}
        onSelectProject={(p) => setActiveProjectIdForMap(p.id)}
        onOpenReport={handleOpenProjectModal}
      />

      {/* 07: Editorial Project Specification Library / Table */}
      <ProjectLibrary
        theme={theme}
        onSelectProject={handleOpenProjectModal}
      />

      {/* 08: Closing CTA & Chapter 06 Insights Transition */}
      <ProjectsClosingCTA
        theme={theme}
        onOpenCalculator={onOpenCalculator}
        onNavigateImpact={() => onNavigate && onNavigate('impact')}
        onNavigateInsights={() => onNavigate && onNavigate('insights')}
      />

      {/* Global Project Detail Field Report Modal */}
      <ProjectDetailModal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onViewInsight={() => onNavigate && onNavigate('insights')}
        theme={theme}
      />
    </div>
  );
}
