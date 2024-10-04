// podcastStore.test.ts
import { renderHook, act } from '@testing-library/react'
import { usePodcastStore } from '@/store/podcastStore';
import { testEpisode } from '../../../__mocks__/episodes';

describe('podcastStore', () => {
  it('should set filter text', () => {
    const { result } = renderHook(() => usePodcastStore());

    act(() => {
      result.current.setFilterText('test');
    });

    expect(result.current.filterText).toBe('test');
  });

  it('should set selected episode', () => {
    const { result } = renderHook(() => usePodcastStore());

    act(() => {
      result.current.setEpisodeDetail(testEpisode);
    });

    expect(result.current.episodeDetail).toEqual(testEpisode);
  });


});