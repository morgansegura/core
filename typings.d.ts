import { Image } from "sanity";

type SanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface LandingPage extends SanityBase {
  _type: "landingPage";
  title: string;
}
