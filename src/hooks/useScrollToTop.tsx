import { useRef, useCallback } from 'react';

// Define the type for the ref object
type RefObject<T> = {
  readonly current: T | null;
};

// Define the custom hook
const useScrollToFirstPost = () => {
  // Ref for the container of blog posts
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling to the first post
  const scrollToFirstPost = useCallback(() => {
    // Scroll to the container of blog posts
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Return the ref and the function
  return { containerRef, scrollToFirstPost };
};

export default useScrollToFirstPost;
