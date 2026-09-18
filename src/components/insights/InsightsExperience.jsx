import React, { useState } from 'react';
import InsightsHero from './InsightsHero';
import InsightsCategories from './InsightsCategories';
import FeaturedInsight from './FeaturedInsight';
import InsightCardGrid from './InsightCardGrid';
import InsightsArchive from './InsightsArchive';
import FieldPrinciples from './FieldPrinciples';
import InsightsClosingCTA from './InsightsClosingCTA';
import InsightDetailModal from './InsightDetailModal';
import { INSIGHTS_DATA } from '../../data/brandData';

export default function InsightsExperience({
  theme = 'day',
  onOpenCalculator,
  onNavigate
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalInsight, setModalInsight] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal with specific insight details
  const handleOpenInsight = (insight) => {
    setModalInsight(insight);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Scroll smoothly to archive section
  const handleExploreArchive = () => {
    const section = document.getElementById('insights-archive');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll smoothly to featured section
  const handleExploreFeatured = () => {
    const section = document.getElementById('featured-insight');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Jump directly to connected project in Chapter 05
  const handleViewProject = (projectId) => {
    if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* 01: Hero Section with Knowledge Field Visualization */}
      <InsightsHero
        theme={theme}
        onExploreArchive={handleExploreArchive}
        onExploreFeatured={handleExploreFeatured}
      />

      {/* 02: Sticky Category Navigation Bar */}
      <InsightsCategories
        theme={theme}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 03: Dominant Featured Insight (Field Note 07.01) */}
      <FeaturedInsight
        theme={theme}
        onOpenInsight={handleOpenInsight}
        onViewProject={handleViewProject}
      />

      {/* 04: Structured Collection of Varied Insight Archetypes */}
      <InsightCardGrid
        theme={theme}
        selectedCategory={selectedCategory}
        onOpenInsight={handleOpenInsight}
        onViewProject={handleViewProject}
      />

      {/* 05: The EcoNest Field Archive (Searchable Registry) */}
      <InsightsArchive
        theme={theme}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onOpenInsight={handleOpenInsight}
      />

      {/* 06: Principles from the Field */}
      <FieldPrinciples
        theme={theme}
        onOpenInsightByNumber={(refNumber) => {
          const matched = INSIGHTS_DATA.find(i => i.number === refNumber);
          if (matched) {
            handleOpenInsight(matched);
          }
        }}
      />

      {/* 07: Closing Section & Transition to Next Horizon (Solutions) */}
      <InsightsClosingCTA
        theme={theme}
        onNavigateSolutions={() => onNavigate && onNavigate('solutions')}
        onNavigateProjects={() => onNavigate && onNavigate('projects')}
        onOpenCalculator={onOpenCalculator}
      />

      {/* Global Insight Reading Modal */}
      <InsightDetailModal
        insight={modalInsight}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onViewProject={handleViewProject}
        theme={theme}
      />
    </div>
  );
}
