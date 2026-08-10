import textar from "../media/textar.jpg"
import castrol from "../media/castrol.jpg"
import lemforder from "../media/lemforder.svg"
import bosch from "../media/bosch.jpg"
import febi from "../media/febi.svg"
import mannFilter from "../media/mannFilter.png"
import bmw from "../media/bmwm4.webp"
import lada from "../media/lada.webp"
import minicooper from "../media/minicooper.webp"
import alfaromeo from "../media/alfaromeo.webp"
import fiat500 from "../media/fiat500.webp"
import oilfilter from "../media/oilfilter.webp";
import airfilter from "../media/airfilter.webp";
import sparkplug from "../media/sparkplug.webp";
import timingbelt from "../media/timingbelt.webp";
import brakepad from "../media/brakepad.webp";
import brakedisc from "../media/brakedisc.webp";
import shockabsorber from "../media/shockabsorber.webp";
import controlarm from "../media/controlarm.webp";
import wheelbearing from "../media/wheelbearing.webp";
import radiator from "../media/radiator.webp";
import waterpump from "../media/waterpump.webp";
import thermostat from "../media/thermostat.webp";
import accondenser from "../media/accondenser.webp";
import clutchkit from "../media/clutchkit.webp";
import flywheel from "../media/flywheel.webp";
import cvjoint from "../media/cvjoint.webp";
import driveshaft from "../media/driveshaft.webp";
import transmissioncomponent from "../media/transmissioncomponent.webp";

export const imageLogos = [
  { src: textar, alt: "Company 1"},
  { src: castrol, alt: "Company 2"},
  { src: lemforder, alt: "Company 3"},
  { src: bosch, alt: "Company 3"},
  { src: febi, alt: "Company 3"},
  { src: mannFilter, alt: "Company 3"},
  ];

export const carsList = [
  {
    imageUrl: bmw,
    title: 'BMW',
    content: 'Premium German engineering known for luxury, performance, and innovation. We supply authentic BMW spare parts to keep your vehicle performing at its best.',
    alt: 'BMW image'
  },
  {
    imageUrl: lada,
    title: 'Lada',
    content: 'Renowned for durability and reliability, Lada vehicles are built to handle demanding conditions. We offer genuine parts to ensure long-lasting performance.',
    alt: 'Lada image'
  },
  {
    imageUrl:  minicooper,
    title: 'Mini Cooper',
    content: 'Famous for its iconic design and agile handling, MINI Cooper delivers a unique driving experience. Our genuine spare parts help maintain its performance, safety, and style.',
    alt: 'Mini Cooper image'
  },
  {
    imageUrl: alfaromeo,
    title: 'Alfa Romeo',
    content: 'A symbol of Italian passion and performance, Alfa Romeo blends elegant design with a thrilling driving experience. We provide authentic parts that preserve its distinctive character.',
    alt: 'Alfa Romeo image'
  },
  {
    imageUrl: fiat500,
    title: 'Fiat',
    content: 'Combining Italian style with everyday practicality, Fiat is trusted by drivers worldwide. Find high-quality original spare parts for dependable maintenance and repairs.',
    alt: 'Fiat 500 image'
  }
]

export const partsList = [
  // =========================
  // ENGINE
  // =========================
  {
    imageUrl: oilfilter,
    title: "Oil Filter",
    content:
      "Essential for keeping engine oil clean and protecting critical engine components from harmful contaminants.",
    alt: "Automotive oil filter",
  },
  {
    imageUrl: airfilter,
    title: "Air Filter",
    content:
      "Designed to provide clean airflow to the engine, helping maintain efficient combustion and reliable performance.",
    alt: "Automotive air filter",
  },
  {
    imageUrl: sparkplug,
    title: "Spark Plug",
    content:
      "Reliable ignition components that help engines start smoothly and maintain efficient performance.",
    alt: "Automotive spark plug",
  },
  {
    imageUrl: timingbelt,
    title: "Timing Belt",
    content:
      "Precision components that keep the engine's internal timing synchronized for smooth and dependable operation.",
    alt: "Automotive timing belt",
  },

  // =========================
  // BRAKING & SUSPENSION
  // =========================
  {
    imageUrl: brakepad,
    title: "Brake Pad",
    content:
      "Quality brake pads designed to provide dependable stopping performance and consistent braking control.",
    alt: "Automotive brake pad",
  },
  {
    imageUrl: brakedisc,
    title: "Brake Disc",
    content:
      "Durable brake discs engineered to provide reliable braking performance and effective heat management.",
    alt: "Automotive brake disc",
  },
  {
    imageUrl: shockabsorber,
    title: "Shock Absorber",
    content:
      "Designed to improve vehicle stability, handling, and ride comfort by controlling suspension movement.",
    alt: "Automotive shock absorber",
  },
  {
    imageUrl: controlarm,
    title: "Control Arm",
    content:
      "Important suspension components that help maintain proper wheel alignment and controlled vehicle movement.",
    alt: "Automotive control arm",
  },
  {
    imageUrl: wheelbearing,
    title: "Wheel Bearing",
    content:
      "Precision components that allow wheels to rotate smoothly while supporting the vehicle's weight.",
    alt: "Automotive wheel bearing",
  },

  // =========================
  // COOLING & A/C
  // =========================
  {
    imageUrl: radiator,
    title: "Radiator",
    content:
      "Designed to regulate engine temperature by efficiently transferring heat away from the cooling system.",
    alt: "Automotive radiator",
  },
  {
    imageUrl: waterpump,
    title: "Water Pump",
    content:
      "Essential cooling-system components that circulate coolant through the engine to help maintain proper temperature.",
    alt: "Automotive water pump",
  },
  {
    imageUrl: thermostat,
    title: "Thermostat",
    content:
      "Help regulate engine temperature by controlling the flow of coolant through the cooling system.",
    alt: "Automotive thermostat",
  },
  {
    imageUrl: accondenser,
    title: "A/C Condenser",
    content:
      "Help remove heat from the refrigerant, allowing the vehicle's air-conditioning system to produce cool air.",
    alt: "Automotive air conditioning condenser",
  },

  // =========================
  // TRANSMISSION & DRIVETRAIN
  // =========================
  {
    imageUrl: clutchkit,
    title: "Clutch Kit",
    content:
      "Reliable clutch components designed to provide smooth power transfer between the engine and transmission.",
    alt: "Automotive clutch kit",
  },
  {
    imageUrl: flywheel,
    title: "Flywheel",
    content:
      "Precision-engineered components that help provide smooth engine operation and effective power transfer.",
    alt: "Automotive flywheel",
  },
  {
    imageUrl: cvjoint,
    title: "CV Joint",
    content:
      "Designed to transfer power smoothly to the wheels while allowing the suspension and steering to operate properly.",
    alt: "Automotive CV joint",
  },
  {
    imageUrl: driveshaft,
    title: "Drive Shaft",
    content:
      "Strong drivetrain components designed to transfer rotational power from the transmission to the wheels.",
    alt: "Automotive drive shaft",
  },
  {
    imageUrl: transmissioncomponent,
    title: "Transmission Component",
    content:
      "Essential components designed to support smooth gear changes, efficient power delivery, and dependable drivetrain performance.",
    alt: "Automotive transmission component",
  },
];