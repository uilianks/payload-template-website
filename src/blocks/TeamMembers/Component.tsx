import React from 'react';
import Image from 'next/image';
import type { TeamMemberBlock as TeamMembersBlockProps } from '@/payload-types';


export const TeamMembersBlock: React.FC<TeamMembersBlockProps> = (props) => {
    const { columns } = props;

    if (!columns || columns.length === 0) {
        return <p>No team members found.</p>;
    }

    return (
        <div className="container mx-auto my-16">
            <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {columns.map((member, index) => (
                    <div key={index} className=" p-6 shadow-lg rounded-lg text-center">
                        {member.image && (
                            <Image
                                src={typeof member.image === 'string' ? member.image : member.image?.url || ''}
                                alt={member.name}
                                className="rounded-full mx-auto mb-4"
                                width={50}
                                height={50}
                            />
                        )}
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className=" mt-2">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};