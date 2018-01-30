'use strict';

const termsPromise = (() => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        label: "Timings",
        choices: [
          { value: "abDg67f3", label: "New Parliament " },
          { value: "ndbs63k2", label: "End of a Parliament" },
          { value: "ncueK234", label: "Queen's Speech" },
          { value: "asdUnc41", label: "Prorogation" },
          { value: "Cu2mcc24", label: "Sitting times" },
          { value: "cnjkai12", label: "Typical day" },
          { value: "asdjj21Q", label: "Recess" }
        ]
      },
      {
        label: "Debates and Voting",
        choices: [
          { value: "jas123J1", label: "Rules and courtesies" },
          { value: "sjdawe21", label: "Points of Order" },
          { value: "mjajsdJ2", label: "Voting" },
          { value: "asdjnJ41", label: "Speaking in a debate" },
          { value: "dagh23F2", label: "Ending a debate" },
          { value: "asdMK12e", label: "General debates" },
          { value: "aajewe23", label: "Substantive motions" },
          { value: "knwnJnsb", label: "Opposition day debates" },
          { value: "aq2unbCN", label: "Adjournment debates" },
          { value: "gihkdK2f", label: "Westminster Hall debate" },
          { value: "bvjw1E23", label: "Backbench Busiess Commitete debates" },
          { value: "acsmghjL", label: "Emergency debates" }
        ]
      },
      {
        label: "Questions",
        choices: [
          { value: "kasdASND", label: "Written quesitons" },
          { value: "MCNJ1md1", label: "Oral questions" },
          { value: "caKKMN1e", label: "Prime Minister's questions" },
          { value: "a189uMCa", label: "Business questions " },
          { value: "gknraM12", label: "Urgent questions" },
          { value: "CMkj1cq4", label: "Deadlines" },
          { value: "gqmkjak5", label: "Rules" },
          { value: "41MHgkq1", label: "Problems" },
        ]
      },
      {
        label: "Early Day Motions",
        choices: [
          { value: "asdj1JCF", label: "Submitting an EDM" },
          { value: "kjsadj1C", label: "Signing an EDM" },
          { value: "iqpRm141", label: "Amending an EDM" },
          { value: "aPkikm1d", label: "Withdrawing an EDM" },
          { value: "gKA1nC12", label: "Rules for EDMs" },
          { value: "17vmaJ12", label: "Publication of EDMS" },
          { value: "vh151cmJ", label: "EDMs and delegated legislation" }
        ]
      },
      {
        label: "Bills and Delegated Legislation",
        choices: [
          { value: "Acaj1nv1", label: "Bill Stages" },
          { value: "jvmaca11", label: "Find your way around a Bill" },
          { value: "8vckacCN", label: "Amendments" },
          { value: "p1dcqCJa", label: "Public Bill Committees" },
          { value: "p11cmcHk", label: "Legislation and the House of Lords" },
          { value: "ajaCmnq1", label: "English Votes for English Laws (EVEL)" },
          { value: "p1jkcn1f", label: "Private Members' Bills" },
          { value: "ap1dlm1c", label: "Private and Hybrid Bills" },
          { value: "APAcnn12", label: "Delegated Legislation" },
          { value: "1021emd1", label: "Selection Committee" }
        ]
      },
      {
        label: "Petitions",
        choices: [
          { value: "dtZWTcC9", label: "Paper Petitions" },
          { value: "cXSRzVh3", label: "E-petitions" },
          { value: "uGuRG2d5", label: "Petitions Committee and debates" }
        ]
      },
      {
        label: "Statements",
        choices: [
          { value: "Ioamc124", label: "Oral statements" },
          { value: "Poacj12G", label: "Written statements" },
          { value: "Ilkcnas1", label: "Speaker's statements" },
          { value: "91ucj1CB", label: "Select Committee statements" },
          { value: "soq1kdfq", label: "Personal statements" }
        ]
      },
      {
        label: "Select Committees",
        choices: [
          { value: "1j1cn3Cd", label: "Members" },
          { value: "pCKmasn1", label: "Chairs" },
          { value: "ColMNSD1", label: "Role" },
          { value: "VJ1odc1C", label: "Meetings and papers" },
          { value: "Pkacnnq1", label: "Inquiries and witnesses" },
          { value: "INamcn1D", label: "Reports" },
          { value: "PCLqm1cm", label: "Powers" },
          { value: "0akcjajC", label: "Staff and Specialist Advisors" },
          { value: "AKCJ1c1E", label: "Types of Select Committee" }
        ]
      },
      {
        label: "European Security",
        choices: [
          { value: "Coqj1cnA", label: "European Scrutiny Committee" },
          { value: "CPk1cmKa", label: "Debate in Chamber on European document" },
          { value: "CAi1poco", label: "Debate in Committee on European document" },
          { value: "alc1p1CL", label: "Other forms of EU scrutiny in the House of Commons" },
        ]
      },
      {
        label: "Money",
        choices: [
          { value: "Gjkacjqi", label: "Budget" },
          { value: "GOpDM2CC", label: "Finance Bill" },
          { value: "AP1J1CSD", label: "Spring Statement" },
          { value: "CKJ1CDEE", label: "Estimates" },
          { value: "0c1k1ida", label: "Estimates days" },
          { value: "sa1ckmnD", label: "Supply and Appropriation Bill" },
        ]
      },
      {
        label: "Privilege",
        choices: [
          { value: "opq1kc1S", label: "Principles of Privilege" },
          { value: "VGJ21c32", label: "Freedom of speech" },
          { value: "8guhcMSd", label: "Self-regulation" },
          { value: "Adfqglv1", label: "Other protections" },
          { value: "c1cjasd1", label: "Infringements" }
        ]
      },
      {
        label: "Publications and Records",
        choices: [
          { value: "8cjqacMs", label: "Order Paper" },
          { value: "Ckj1nmc1", label: "Future Business" },
          { value: "81uycnsS", label: "Hansard" },
          { value: "19cjcsmm", label: "Votes and Proceedings" },
          { value: "117dcjs3", label: "Standing Orders" },
          { value: "s1d1dMs2", label: "Erskine May" },
          { value: "18cmsE32", label: "Laid Papers" }
        ]
      }
    ]);
  });
});

export default termsPromise;
