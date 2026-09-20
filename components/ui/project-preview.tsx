import {
  ArrowUpRight, CalendarDays, Check, ChevronDown, CircleHelp,
  HeartHandshake, LayoutDashboard, MapPin, Package, Search,
  ShieldCheck, ShoppingBag, SlidersHorizontal, Users,
} from "lucide-react";
import type { Project } from "@/types/project";
import styles from "./project-preview.module.css";

function BrowserBar({ label }: { label: string }) {
  return (
    <div className={styles.browserBar}>
      <span className={styles.windowDots}><i /><i /><i /></span>
      <span className={styles.address}>{label}</span>
      <span className={styles.browserMark}>↗</span>
    </div>
  );
}

function HumanitarianPreview() {
  return (
    <div className={styles.dashboard}>
      <BrowserBar label="sanad / workspace" />
      <div className={styles.dashboardBody}>
        <div className={styles.sidebar}>
          <span className={styles.sanadLogo}><HeartHandshake size={19} />sanad<span>.</span></span>
          <span className={styles.sidebarLabel}>WORKSPACE</span>
          <span className={styles.sidebarActive}><LayoutDashboard size={12} />Overview</span>
          <span><Users size={12} />Cases</span>
          <span><HeartHandshake size={12} />Aid requests</span>
          <span><MapPin size={12} />Shelters</span>
          <span><CalendarDays size={12} />Volunteers</span>
          <span className={styles.sidebarHelp}><CircleHelp size={12} />Support</span>
        </div>
        <div className={styles.dashboardMain}>
          <div className={styles.dashboardTopline}><span>Good things start with support.</span><span className={styles.avatar}>S</span></div>
          <h4>Every connection matters.</h4>
          <p>Your humanitarian workspace, connected.</p>
          <div className={styles.overviewCards}>
            <div><Users size={15} /><strong>Case management</strong><span>People at the center</span></div>
            <div><HeartHandshake size={15} /><strong>Aid coordination</strong><span>Support that connects</span></div>
          </div>
          <div className={styles.caseTable}>
            <div className={styles.tableTitle}><strong>Support workflow</strong><SlidersHorizontal size={11} /></div>
            <div className={styles.caseRow}><span className={styles.caseIcon}><HeartHandshake size={12} /></span><span>Request received<small>Initial assessment</small></span><span className={styles.status}>Review</span></div>
            <div className={styles.caseRow}><span className={styles.caseIcon}><Users size={12} /></span><span>Connect with support<small>Case assignment</small></span><span className={styles.status}>Match</span></div>
            <div className={styles.caseRow}><span className={styles.caseIcon}><ShieldCheck size={12} /></span><span>Coordinate next steps<small>Team follow-up</small></span><span className={styles.status}>Connect</span></div>
          </div>
          <div className={styles.secureLine}><ShieldCheck size={11} />Secure access. Connected support.</div>
        </div>
      </div>
      <div className={styles.floatingNote}><span className={styles.noteIcon}><Check size={13} /></span><span><strong>Built around people</strong><small>Connected by technology</small></span></div>
    </div>
  );
}

function BookingPreview() {
  return (
    <div className={styles.miniBrowser}>
      <BrowserBar label="stays / discover" />
      <div className={styles.bookingBody}>
        <div className={styles.miniNav}><span><MapPin size={13} />stays<span className={styles.brandDot}>.</span></span><span>Discover&nbsp;&nbsp; · &nbsp;&nbsp;Your trips</span><span className={styles.miniAvatar}>M</span></div>
        <div className={styles.bookingHeading}><h4>Your next chapter<br />starts somewhere new.</h4><span className={styles.roundArrow}><ArrowUpRight size={16} /></span></div>
        <div className={styles.searchField}><Search size={11} /><span>Find a place to feel at home</span><SlidersHorizontal size={11} /></div>
        <div className={styles.stayCards}>
          <div><div className={`${styles.stayScene} ${styles.sceneOne}`}><span className={styles.arch} /><span className={styles.plane} /></div><strong>A place to unwind</strong><span>Explore available stays</span></div>
          <div><div className={`${styles.stayScene} ${styles.sceneTwo}`}><span className={styles.building} /><span className={styles.plane} /></div><strong>Room for discovery</strong><span>Make your next reservation</span></div>
          <div><div className={`${styles.stayScene} ${styles.sceneThree}`}><span className={styles.arch} /><span className={styles.plane} /></div><strong>Somewhere different</strong><span>Find your next destination</span></div>
        </div>
      </div>
    </div>
  );
}

function CommercePreview() {
  return (
    <div className={styles.miniBrowser}>
      <BrowserBar label="collection / storefront" />
      <div className={styles.commerceBody}>
        <div className={styles.miniNav}><span><ShoppingBag size={13} />the collection<span className={styles.brandDot}>.</span></span><span>Shop&nbsp;&nbsp; · &nbsp;&nbsp;Collections</span><ShoppingBag size={13} /></div>
        <div className={styles.commerceHero}><div><span className={styles.smallEyebrow}>CONSIDERED ESSENTIALS</span><h4>Everyday.<br />Thoughtfully chosen.</h4><span className={styles.mockButton}>Explore collection <ArrowUpRight size={10} /></span></div><div className={styles.productObject}><span className={styles.objectHandle} /><span className={styles.objectBody} /></div></div>
        <div className={styles.collectionBar}><strong>Discover the collection</strong><span>Browse all <ChevronDown size={10} /></span></div>
        <div className={styles.productCards}>
          <div><span className={styles.productTile}><Package size={24} strokeWidth={1} /></span><span>Explore products</span></div>
          <div><span className={styles.productTile}><ShoppingBag size={24} strokeWidth={1} /></span><span>Made for everyday</span></div>
          <div><span className={styles.productTile}><Package size={24} strokeWidth={1} /></span><span>Find your essentials</span></div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className={styles.imageWrap}>
        <img src={project.image} alt={project.imageAlt} width={1200} height={800} loading="lazy" decoding="async" className={styles.projectImage} />
      </div>
    );
  }

  return (
    <div className={`${styles.preview} ${project.featured ? styles.featured : ""}`}>
      <div className={styles.conceptLabel}>Interface concept</div>
      <div aria-hidden="true" className={styles.visual}>
        {project.previewKind === "humanitarian" && <HumanitarianPreview />}
        {project.previewKind === "booking" && <BookingPreview />}
        {project.previewKind === "commerce" && <CommercePreview />}
      </div>
      <span className={styles.previewCaption}>{project.previewKind === "humanitarian" ? "PURPOSE-DRIVEN SOFTWARE" : project.previewKind === "booking" ? "DISCOVERY → RESERVATION" : "STOREFRONT → OPERATIONS"}</span>
    </div>
  );
}
