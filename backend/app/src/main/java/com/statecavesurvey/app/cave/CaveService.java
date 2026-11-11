package com.statecavesurvey.app.cave;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
class CaveService {

  private static final int DESCRIPTION_PREVIEW_LENGTH = 200;

  private final CaveRepository caveRepository;

  CaveService(CaveRepository caveRepository) {
    this.caveRepository = caveRepository;
  }

  @Transactional(readOnly = true)
  Page<CaveSummaryResponse> getCaveSummaries(final int page, final int limit) {
    Sort sort = Sort.by(Sort.Direction.DESC, Cave::getLastUpdated).and(Sort.by(Cave::getName));
    PageRequest pageRequest = PageRequest.of(page, limit, sort);
    return caveRepository.findAll(pageRequest).map(this::toSummary);
  }

  private CaveSummaryResponse toSummary(Cave cave) {
    return new CaveSummaryResponse(
        cave.getId(),
        cave.getExternalId(),
        cave.getName(),
        toPreview(cave.getDescription()),
        cave.getIsOpen(),
        cave.getHorizontalLengthFeet(),
        cave.getVerticalLengthFeet(),
        cave.getNumberOfPits(),
        cave.getDeepestPitLengthFeet(),
        cave.getFirstSubmitted(),
        cave.getLastUpdated());
  }

  private static String toPreview(String description) {
    if (description == null || description.length() <= DESCRIPTION_PREVIEW_LENGTH) {
      return description;
    }
    return description.substring(0, DESCRIPTION_PREVIEW_LENGTH).stripTrailing() + "…";
  }
}
