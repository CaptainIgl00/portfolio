<template>
  <div class="card card-hover h-full flex flex-col">
    <div class="w-12 h-12 mx-auto mb-4 text-primary-300">
      <slot name="icon"></slot>
    </div>
    <h3 class="text-xl font-bold mb-4 text-center gradient-text">
      <slot name="title"></slot>
    </h3>
    <div class="text-slate-400 mb-4 leading-relaxed">
      <slot name="description"></slot>
    </div>
    <div class="flex flex-wrap gap-2 justify-center mt-auto">
      <slot name="tags"></slot>
    </div>
    <div class="space-y-4">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.skill-category {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.skill-category:hover {
  transform: translateY(-5px);
  border-color: rgba(165, 180, 252, 0.2);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.skill-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  color: #a5b4fc;
}

.skill-icon svg {
  width: 100%;
  height: 100%;
}

.skill-category h3 {
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.25rem;
}

.skill-description {
  color: #94a3b8;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.skill-tags .tag {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #e2e8f0;
}

.skill-item {
  margin-bottom: 1rem;
}

.skill-header {
  margin-bottom: 0.5rem;
  color: #e2e8f0;
  font-weight: 500;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  color: #94a3b8;
  margin-bottom: 0.5rem;
  padding-left: 1.25rem;
  position: relative;
}

li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #a5b4fc;
}

@media (max-width: 768px) {
  .skill-category {
    padding: 1rem;
  }
}
</style> 