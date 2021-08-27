import { ArrowDown } from './defs/ArrowDown';
import { ArrowLeft } from './defs/ArrowLeft';
import { ArrowRight } from './defs/ArrowRight';
import { ArrowUp } from './defs/ArrowUp';
import { Brain } from './defs/Brain';
import { Calendar } from './defs/Calendar';
import { Cancel } from './defs/Cancel';
import { Checkmark } from './defs/Checkmark';
import { Clock } from './defs/Clock';
import { Copy } from './defs/Copy';
import { Conversation } from './defs/Conversation';
import { CircleDown } from './defs/CircleDown';
import { CircleLeft } from './defs/CircleLeft';
import { CircleRight } from './defs/CircleRight';
import { CircleUp } from './defs/CircleUp';
import { Envelope } from './defs/Envelope';
import { Eye } from './defs/Eye';
import { Facebook } from './defs/Facebook';
import { FacebookAlt } from './defs/FacebookAlt';
import { Fire } from './defs/Fire';
import { Github } from './defs/Github';
import { Handshake } from './defs/Handshake';
import { Info } from './defs/Info';
import { Instagram } from './defs/Instagram';
import { LinkedInAlt } from './defs/LinkedInAlt';
import { Location } from './defs/Location';
import { Lock } from './defs/Lock';
import { MoneyComment } from './defs/MoneyComment';
import { MapMarker } from './defs/MapMarker';
import { NewTab } from './defs/NewTab';
import { Next } from './defs/Next';
import { Previous } from './defs/Previous';
import { Rocket } from './defs/Rocket';
import { Share } from './defs/Share';
import { Spotify } from './defs/Spotify';
import { Ticket } from './defs/Ticket';
import { TwitterAlt } from './defs/TwitterAlt';
import { Warning } from './defs/Warning';
import { Youtube } from './defs/Youtube';

export const availableIcons = {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Brain,
    Calendar,
    Cancel,
    Checkmark,
    CircleDown,
    CircleLeft,
    CircleRight,
    CircleUp,
    Clock,
    Copy,
    Conversation,
    Envelope,
    Eye,
    Facebook,
    FacebookAlt,
    Fire,
    Github,
    Handshake,
    Info,
    Instagram,
    LinkedInAlt,
    Location,
    Lock,
    MoneyComment,
    MapMarker,
    NewTab,
    Next,
    Previous,
    Rocket,
    Share,
    Spotify,
    Ticket,
    TwitterAlt,
    Warning,
    Youtube,
};

export type IconDefinition = {
    viewBox: string;
    path: JSX.Element;
};

export type AvailableIcons = typeof availableIcons;
export type AvailableIconName = keyof AvailableIcons;
