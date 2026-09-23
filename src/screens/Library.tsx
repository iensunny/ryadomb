import { useMemo, useState } from "react";
import { storyCategories } from "../constants/storyCategories";
import type { Story, StoryCategory } from "../domain/story";
import { StoryCard } from "../ui/StoryCard";

type Props = {
  stories: Story[];
  userId?: number;
  onNewStory: () => void;
  onOpenStory: (storyId: string) => void;
};

const filtersKey = (userId?: number) => `family-stories-filters-v1-${userId ?? "local"}`;

function readFilters(userId?: number): StoryCategory[] {
  try {
    const value = window.localStorage.getItem(filtersKey(userId));
    return value ? (JSON.parse(value) as StoryCategory[]) : [];
  } catch {
    return [];
  }
}

export function Library({ stories, userId, onNewStory, onOpenStory }: Props) {
  const [filters, setFilters] = useState<StoryCategory[]>(() => readFilters(userId));

  function updateFilters(next: StoryCategory[]) {
    setFilters(next);
    window.localStorage.setItem(filtersKey(userId), JSON.stringify(next));
  }

  function toggleFilter(category: StoryCategory) {
    updateFilters(filters.includes(category)
      ? filters.filter((item) => item !== category)
      : [...filters, category]);
  }

  const filteredStories = useMemo(() => {
    if (filters.length === 0) return stories;
    return stories.filter((story) => {
      const categories: StoryCategory[] = story.categories?.length
        ? story.categories
        : ["История"];
      return filters.some((filter) => categories.includes(filter));
    });
  }, [filters, stories]);

  function countFor(category: StoryCategory) {
    return stories.filter((story) => {
      const categories: StoryCategory[] = story.categories?.length
        ? story.categories
        : ["История"];
      return categories.includes(category);
    }).length;
  }

  return (
    <section className="screen screen-scroll with-nav">
      <header className="page-head">
        <p className="kicker">Истории</p>
        <h1>Семейные истории</h1>
        <p>Выберите одну или несколько категорий.</p>
      </header>

      <button className="library-create" onClick={onNewStory}>
        <span>+</span>Добавить историю
      </button>

      <div className="story-filter-strip" aria-label="Фильтры историй">
        <button type="button" className={filters.length === 0 ? "filter-chip active" : "filter-chip"} aria-pressed={filters.length === 0} onClick={() => updateFilters([])}>
          Все <span>{stories.length}</span>
        </button>
        {storyCategories.map((category) => (
          <button type="button" key={category} className={filters.includes(category) ? "filter-chip active" : "filter-chip"} aria-pressed={filters.includes(category)} onClick={() => toggleFilter(category)}>
            {category} <span>{countFor(category)}</span>
          </button>
        ))}
      </div>

      <div className="story-list">
        {filteredStories.map((story) => (
          <StoryCard key={story.id} story={story} onOpen={() => onOpenStory(story.id)} />
        ))}
        {filteredStories.length === 0 && (
          <div className="empty-state compact-empty">
            <h2>В этих категориях пока пусто</h2>
            <p>Выберите другие фильтры или добавьте новую историю.</p>
          </div>
        )}
      </div>
    </section>
  );
}
