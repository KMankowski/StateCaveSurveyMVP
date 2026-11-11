package com.statecavesurvey.app.cave;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.Instant;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "cave")
class Cave {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Integer id;

  @Column(name = "external_id")
  private String externalId;

  @Column(name = "name")
  private String name;

  @Column(name = "description")
  private String description;

  @Column(name = "is_open")
  private Boolean isOpen;

  @Column(name = "horizontal_length_feet")
  private Integer horizontalLengthFeet;

  @Column(name = "vertical_depth_feet")
  private Integer verticalDepthFeet;

  @Column(name = "number_of_pits")
  private Integer numberOfPits;

  @Column(name = "deepest_pit_length_feet")
  private Integer deepestPitLengthFeet;

  @CreationTimestamp
  @Column(name = "first_submitted", nullable = false, updatable = false)
  private Instant firstSubmitted;

  @UpdateTimestamp
  @Column(name = "last_updated", nullable = false)
  private Instant lastUpdated;

  Integer getId() {
    return id;
  }

  void setId(Integer id) {
    this.id = id;
  }

  String getExternalId() {
    return externalId;
  }

  void setExternalId(String externalId) {
    this.externalId = externalId;
  }

  String getName() {
    return name;
  }

  void setName(String name) {
    this.name = name;
  }

  String getDescription() {
    return description;
  }

  void setDescription(String description) {
    this.description = description;
  }

  Boolean getIsOpen() {
    return isOpen;
  }

  void setIsOpen(Boolean isOpen) {
    this.isOpen = isOpen;
  }

  Integer getHorizontalLengthFeet() {
    return horizontalLengthFeet;
  }

  void setHorizontalLengthFeet(Integer horizontalLengthFeet) {
    this.horizontalLengthFeet = horizontalLengthFeet;
  }

  Integer getVerticalDepthFeet() {
    return verticalDepthFeet;
  }

  void setVerticalDepthFeet(Integer verticalDepthFeet) {
    this.verticalDepthFeet = verticalDepthFeet;
  }

  Integer getNumberOfPits() {
    return numberOfPits;
  }

  void setNumberOfPits(Integer numberOfPits) {
    this.numberOfPits = numberOfPits;
  }

  Integer getDeepestPitLengthFeet() {
    return deepestPitLengthFeet;
  }

  void setDeepestPitLengthFeet(Integer deepestPitLengthFeet) {
    this.deepestPitLengthFeet = deepestPitLengthFeet;
  }

  Instant getFirstSubmitted() {
    return firstSubmitted;
  }

  void setFirstSubmitted(Instant firstSubmitted) {
    this.firstSubmitted = firstSubmitted;
  }

  Instant getLastUpdated() {
    return lastUpdated;
  }

  void setLastUpdated(Instant lastUpdated) {
    this.lastUpdated = lastUpdated;
  }

  /* Hibernate proxies may extend this class? */
  protected Cave() {}
}
