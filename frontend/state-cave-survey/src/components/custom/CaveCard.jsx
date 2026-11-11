import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const FEET_PER_MILE = 5280;

// API dates are exact moments (UTC timestamps), shown in the viewer's own timezone
const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

// Missing values come back as null from the API. Keep them null here so the
// stat components can show them as "Unreported".
function formatFeet(feet) {
  return feet == null ? null : `${feet.toLocaleString("en-US")} ft`;
}

function formatMiles(feet) {
  return `~${(feet / FEET_PER_MILE).toFixed(2)} mi`;
}

function formatDate(timestamp) {
  return timestamp ? dateFormat.format(new Date(timestamp)) : "—";
}

// Yellow for any missing data (status or stats), so it stands out
const UNREPORTED_CLASS = "text-yellow-400";

const STATUS_BADGES = {
  open: {
    label: "Open",
    className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    dotClassName: "bg-emerald-400",
  },
  closed: {
    label: "Closed",
    className: "border-red-500/30 bg-red-500/10 text-red-400",
    dotClassName: "bg-red-400",
  },
  unreported: {
    label: "Unreported",
    className: `border-yellow-500/30 bg-yellow-500/10 ${UNREPORTED_CLASS}`,
    dotClassName: "bg-yellow-400",
  },
};

function StatusBadge({ isOpen }) {
  const key = isOpen == null ? "unreported" : isOpen ? "open" : "closed";
  const { label, className, dotClassName } = STATUS_BADGES[key];
  return (
    <Badge className={cn("gap-1.5", className)}>
      <span className={cn("size-1.5 rounded-full", dotClassName)} />
      {label}
    </Badge>
  );
}

// Shows a stat's value, or a highlighted "Unreported" when there's no data
function StatValue({ value }) {
  return value == null ? (
    <span className={UNREPORTED_CLASS}>Unreported</span>
  ) : (
    value
  );
}

function BigStat({ label, value, detail }) {
  return (
    <div>
      <div className="text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold tracking-tight tabular-nums">
        <StatValue value={value} />
      </div>
      {/* Always render this line, even when empty, so every card's sections
          line up with the cards next to it */}
      <div className="min-h-lh text-xs text-muted-foreground">{detail}</div>
    </div>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold tabular-nums">
        <StatValue value={value} />
      </span>
    </div>
  );
}

function DateRow({ label, value }) {
  return (
    <div className="flex justify-between text-xs text-muted-foreground">
      <span>{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}

export default function CaveCard({ cave }) {
  return (
    <Card className="h-full gap-5 py-5 [--card-spacing:--spacing(5)]">
      <CardHeader className="gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-mono font-medium text-emerald-400">
            #{cave.externalId}
          </span>
          <span className="text-muted-foreground" aria-hidden="true">
            ·
          </span>
          <StatusBadge isOpen={cave.isOpen} />
        </div>
        <CardTitle className="text-xl font-semibold">{cave.name}</CardTitle>
        {/* One line, cut off with "…", so every card's header is the same height */}
        <CardDescription className="truncate">
          {cave.descriptionPreview}
        </CardDescription>
      </CardHeader>

      {/* @container lets the length stats respond to the card's width */}
      <CardContent className="@container flex flex-col gap-5">
        <Separator />

        {/* Side by side, unless the card is too narrow for both numbers */}
        <div className="grid grid-cols-1 gap-5 @sm:grid-cols-2">
          <BigStat
            label="Horizontal length"
            value={formatFeet(cave.horizontalLengthFeet)}
            detail={
              cave.horizontalLengthFeet == null
                ? null
                : formatMiles(cave.horizontalLengthFeet)
            }
          />
          <BigStat
            label="Vertical depth"
            value={formatFeet(cave.verticalDepthFeet)}
          />
        </div>

        <Separator />

        <div className="flex flex-col gap-3">
          <StatRow label="Pits" value={cave.numberOfPits} />
          <StatRow
            label="Deepest"
            value={formatFeet(cave.deepestPitLengthFeet)}
          />
        </div>

        <Separator />

        <div className="flex flex-col gap-2">
          <DateRow
            label="First submitted"
            value={formatDate(cave.firstSubmitted)}
          />
          <DateRow label="Last updated" value={formatDate(cave.lastUpdated)} />
        </div>
      </CardContent>
    </Card>
  );
}
