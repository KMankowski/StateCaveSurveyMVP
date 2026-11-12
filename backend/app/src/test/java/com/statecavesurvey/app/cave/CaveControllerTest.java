package com.statecavesurvey.app.cave;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.Instant;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(CaveController.class)
class CaveControllerTest {

  @Autowired private MockMvc mockMvc;

  @MockitoBean private CaveService caveService;

  @Test
  void getCavesUsesDefaultPagingAndReturnsPagedJson() throws Exception {
    final int PAGE_NUMBER = 0;
    final int PAGE_LIMIT = 20;

    Instant timestamp = Instant.parse("2026-11-10T12:00:00Z");
    CaveSummaryResponse cave =
        new CaveSummaryResponse(
            1,
            "External Id",
            "Name",
            "Description preview",
            true,
            1000,
            100,
            1,
            50,
            timestamp,
            timestamp);
    List<CaveSummaryResponse> caves = List.of(cave);

    given(caveService.getCaveSummaries(PAGE_NUMBER, PAGE_LIMIT))
        .willReturn(new PageImpl<>(caves, PageRequest.of(PAGE_NUMBER, PAGE_LIMIT), caves.size()));

    mockMvc
        .perform(get("/cave"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.page.number").value(0))
        .andExpect(jsonPath("$.page.size").value(20))
        .andExpect(jsonPath("$.page.totalElements").value(1))
        .andExpect(jsonPath("$.page.totalPages").value(1))
        .andExpect(jsonPath("$.content.length()").value(caves.size()))
        .andExpect(jsonPath("$.content[0].id").value(cave.id()))
        .andExpect(jsonPath("$.content[0].externalId").value(cave.externalId()))
        .andExpect(jsonPath("$.content[0].name").value(cave.name()))
        .andExpect(jsonPath("$.content[0].descriptionPreview").value(cave.descriptionPreview()))
        .andExpect(jsonPath("$.content[0].isOpen").value(cave.isOpen()))
        .andExpect(jsonPath("$.content[0].horizontalLengthFeet").value(cave.horizontalLengthFeet()))
        .andExpect(jsonPath("$.content[0].verticalDepthFeet").value(cave.verticalDepthFeet()))
        .andExpect(jsonPath("$.content[0].numberOfPits").value(cave.numberOfPits()))
        .andExpect(jsonPath("$.content[0].deepestPitLengthFeet").value(cave.deepestPitLengthFeet()))
        .andExpect(jsonPath("$.content[0].firstSubmitted").value(cave.firstSubmitted().toString()))
        .andExpect(jsonPath("$.content[0].lastUpdated").value(cave.lastUpdated().toString()));
  }
}
