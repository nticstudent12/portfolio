
import React from 'react';

type SectionTitleProps = {
  title: string;
  description?: string;
};

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="section-title">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
