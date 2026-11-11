package com.statecavesurvey.app.cave;

import java.time.Instant;

record CaveSummaryResponse(
    int id,
    String externalId,
    String name,
    String descriptionPreview,
    Boolean isOpen,
    Integer horizontalLengthFeet,
    Integer verticalLengthFeet,
    Integer numberOfPits,
    Integer deepestPitLengthFeet,
    Instant firstSubmitted,
    Instant lastUpdated) {}
